import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import config from './config';
import routes from './routes';
//import { createServer } from 'http2';

let app = express();
app.server = http:createServer(app);

//Middleware

// Passport Config

// API routes v1
app.use('/v1', routes);

app.server.listen(config.port);

console.log(`Started on port ${app.server.address().port}`);

export default app;