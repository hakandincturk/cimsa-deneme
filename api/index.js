require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { success } from 'consola';

import publicRoutes from './Public/index';
import privateRoutes from './Private/index';

const PORT = process.env.PORT;
const app = express();

app.listen();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', publicRoutes);
app.use('/private', privateRoutes);

app.get('/health', (req, res) => {
	res.json({type: true, message: 'server is running'});
});

app.listen(PORT, () => {
	success({ message: `SERVER IS RUNNING ON ${PORT}`, badge: true });
});