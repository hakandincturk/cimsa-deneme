import express from 'express';

import CheckUserType from '../../Middlewares/checkUserType';

const app = express();

app.use(CheckUserType.checkUserType('alt-isveren-programi'));

app.get('/health', ( req, res ) => {
	res.json({type: true, message: 'private aip route working'});
});

module.exports = app;