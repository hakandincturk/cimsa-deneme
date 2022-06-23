import express from 'express';

import AuthController from '../Controllers/AuthController';

const app = express();

app.get('/health', AuthController.health);

module.exports = app;