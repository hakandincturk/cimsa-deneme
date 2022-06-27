import express from 'express';
import CheckUserType from '../../Middlewares/checkUserType';

const app = express();

app.use(CheckUserType.checkUserType('usta-analiz'));

app.get('/health', ( req, res ) => {
	res.json({type: true, message: 'private cua route working'});
});

module.exports = app;