// src/config/express.ts

import express, { Application } from 'express';
import cors from 'cors';
import contactRoute from '../routes/contact-route';
import { errorHandler } from '../utils';
import morgan from 'morgan';

const configureExpress = (): Application => {
  const app = express();

  // Middlewares
  app.use(cors());
  app.use(express.json());
  app.use(morgan('combined')); // Logs incoming HTTP requests

  // Routes
  app.use('/web-porto', contactRoute); // Prefix routes with /api (optional)

  // 404 Handler
  app.use((req, res) => {
    res.status(404).json({
      code: 404,
      status: 'Not Found',
      message: 'Route not found',
      request: req.body,
    });
  });

  // Centralized Error Handler
  app.use(errorHandler);

  return app;
};

export default configureExpress;
