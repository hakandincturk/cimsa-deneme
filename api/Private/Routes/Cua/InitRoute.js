import express from 'express';

import CheckUserType from '../../Middlewares/checkUserType';
import CheckPermission from '../../Middlewares/checkPermission';

const app = express();

app.use(CheckUserType.checkUserType(2));

app.get('/health', CheckPermission.checkPermission(2, 'cua-permission-two'), ( req, res ) => {
	res.json({type: true, message: 'private cua route working'});
});

module.exports = app;