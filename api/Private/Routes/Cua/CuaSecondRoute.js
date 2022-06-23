import express from 'express';

const app = express();

app.get('/health', ( req, res ) => {
	res.json({type: true, message: 'private cuaSecond route working'});
});

module.exports = app;