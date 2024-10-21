// src/middlewares/error-handler.ts

import { Request, Response, NextFunction } from 'express';

/**
 * Centralized error handling middleware.
 * Catches all errors and sends a formatted response.
 */
export const errorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error('Unhandled error:', err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    code: statusCode,
    status: 'Error',
    message,
  });
};
