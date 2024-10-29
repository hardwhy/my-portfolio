// src/controllers/contact-controller.ts

import { Request, Response } from 'express';
import { contactService } from '../services/contact-service';
import { Contact } from '@web-porto-core';

/**
 * Controller to handle contact form submissions.
 *
 * @param req - Express Request object containing the contact form data.
 * @param res - Express Response object to send back the appropriate response.
 */
export const sendContactEmail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Extract contact data from the request body
    const contactData: Contact = req.body;

    // Optionally, perform additional validation here
    // For example, check if email is valid, message length, etc.

    // Call the service layer to handle the business logic
    await contactService.sendContactEmail(contactData);

    // Send a success response to the client
    res.status(200).json({
      code: 200,
      status: 'Message sent successfully.',
      data: {
        email: contactData.email,
        name: contactData.name,
        message: contactData.message,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // Log the error for debugging purposes
    console.error('Error in sendContactEmail controller:', error);

    // Determine the type of error and set appropriate status code
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';

    // Send an error response to the client
    res.status(statusCode).json({
      code: statusCode,
      status: 'Failed to send message.',
      error: message,
    });
  }
};
