import express from 'express';
import CheckUserType from '../../Middlewares/checkUserType';

const app = express();

app.use(CheckUserType.checkUserType('hr'));

app.get('/health', ( req, res ) => {
	res.json({type: true, message: 'private hr route working'});
});

module.exports = app;