import express from 'express';

const app = express();

app.get('/health', ( req, res ) => {
	res.json({type: true, message: 'private hr route working'});
});

module.exports = app;