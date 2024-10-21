// src/controllers/contact-controller.test.ts

import request from 'supertest';
import express from 'express';
import contactRoute from '../../routes/contact-route';
import { contactService } from '../../services/contact-service';

// Mock the contactService to prevent actual email sending
jest.mock('../../services/contact-service', () => ({
  contactService: {
    sendContactEmail: jest.fn(),
  },
}));

const app = express();
app.use(express.json());
app.use('/api', contactRoute);

describe('POST /api/contact', () => {
  it('should send a contact email successfully', async () => {
    // Arrange: Mock the service to resolve successfully
    (contactService.sendContactEmail as jest.Mock).mockResolvedValueOnce(
      undefined
    );

    // Act: Send a POST request with valid data
    const response = await request(app).post('/api/contact').send({
      email: 'test@example.com',
      name: 'Test User',
      message: 'This is a test message.',
    });

    // Assert: Check for successful response
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      code: 200,
      status: 'Message sent successfully.',
      data: {
        email: 'test@example.com',
        name: 'Test User',
        message: 'This is a test message.',
      },
    });

    // Ensure the service was called with correct data
    expect(contactService.sendContactEmail).toHaveBeenCalledWith({
      email: 'test@example.com',
      name: 'Test User',
      message: 'This is a test message.',
    });
  });

  it('should return validation errors for invalid input', async () => {
    // Act: Send a POST request with invalid data (missing email)
    const response = await request(app).post('/api/contact').send({
      name: 'Test User',
      message: 'This is a test message.',
    });

    // Assert: Check for validation error response
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('code', 400);
    expect(response.body).toHaveProperty('status', 'Validation Error');
    expect(response.body).toHaveProperty('errors');
    expect(response.body.errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          field: 'email',
          message: 'Please provide a valid email address.',
        }),
      ])
    );
  });

  it('should handle server errors gracefully', async () => {
    // Arrange: Mock the service to throw an error
    (contactService.sendContactEmail as jest.Mock).mockRejectedValueOnce(
      new Error('SMTP Error')
    );

    // Act: Send a POST request with valid data
    const response = await request(app).post('/api/contact').send({
      email: 'test@example.com',
      name: 'Test User',
      message: 'This is a test message.',
    });

    // Assert: Check for server error response
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      code: 500,
      status: 'Failed to send message.',
      error: 'SMTP Error',
    });
  });
});
