import express from 'express';
import CheckUserType from '../../Middlewares/checkUserType';

const app = express();

app.use(CheckUserType.checkUserType(3));

app.get('/health', ( req, res ) => {
	res.json({type: true, message: 'private hr route working'});
});

module.exports = app;