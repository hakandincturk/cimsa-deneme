import express from 'express';
import CheckUserType from '../../Middlewares/checkUserType';

const app = express();

app.use(CheckUserType.checkUserType(2));

app.get('/health', ( req, res ) => {
	res.json({type: true, message: 'private cuaSecond route working'});
});

module.exports = app;