// src/routes/contact-route.ts

import { Router } from 'express';
import { sendContactEmail } from '../controllers/contact-controller';
import { contactValidationRules } from '../utils';
import { validateRequest } from '../utils/middlewares/validate-request';

const router = Router();

// Define the POST /contact route and attach the controller

router.post(
  '/contact',
  contactValidationRules,
  validateRequest,
  sendContactEmail
);
export default router;
