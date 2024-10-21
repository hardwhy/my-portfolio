import { body } from "express-validator";

export const contactValidationRules = [
  body('email').isEmail().withMessage('Please provide a valid email address.'),
  body('name').notEmpty().withMessage('Name is required.'),
  body('message')
    .isLength({ min: 10 })
    .withMessage('Message must be at least 10 characters long.'),
];
