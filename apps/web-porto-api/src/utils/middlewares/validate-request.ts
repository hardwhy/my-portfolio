// src/middlewares/validate-request.ts

import { Request, Response, NextFunction } from 'express';
import { validationResult, FieldValidationError } from 'express-validator';

/**
 * Middleware to validate incoming request data.
 * Sends a 400 response if validation fails.
 */

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      code: 400,
      status: 'Validation Error',
      errors: errors.array().map((err) => ({
        field: (err as FieldValidationError).path,
        message: err.msg,
      })),
    });
    return;
  }
  next();
};
