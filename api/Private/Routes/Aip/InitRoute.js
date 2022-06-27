import express from 'express';

import CheckUserType from '../../Middlewares/checkUserType';
import CheckPermission from '../../Middlewares/checkPermission';

const app = express();

app.use(CheckUserType.checkUserType(1));

app.get('/health', CheckPermission.checkPermission(1, 'aip-permission-one'), ( req, res ) => {
	res.json({type: true, message: 'private aip route working'});
});

module.exports = app;