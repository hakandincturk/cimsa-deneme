import express from 'express';
import fs from 'fs';

import checkAuth from './middlewares/checkAuth';

const app = express();
app.use(checkAuth);

fs.readdir('./api/Private/Routes', (err, mainDirs) => {
	if (err) throw err;

	for (let mainDir of mainDirs) {

		const mainDirExtension = mainDir.slice(-3);
		const mainDirLower = mainDir.toLowerCase();

		if (mainDirExtension === '.js'){ // if the object being read is a file
			const routeName = mainDir.slice(0, mainDir.length - 8);
			const routeNameLower = routeName.toLowerCase();

			let route = require(`./Routes/${routeName}Route`);
			app.use(`/${routeNameLower}`, route);
		}
		else { // if the object being read is a folder
			fs.readdir(`./api/Private/Routes/${mainDir}`, (routeFileErr, routeFiles) => {
				if (routeFileErr) throw routeFileErr;
	
				for (let routeFile of routeFiles){
	
					const routeName = routeFile.slice(0, routeFile.length - 8);
					const routeNameLower = routeName.toLowerCase();
	
					let route = require(`./Routes/${mainDir}/${routeName}Route`);
					app.use(`/${mainDirLower}/${routeNameLower}`, route);
				}
	
			});
		}	
	}
});

module.exports = app;