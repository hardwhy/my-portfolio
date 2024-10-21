// src/repositories/contact-repository.ts

import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

class ContactRepository {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || '', // Use environment variables for security
        pass: process.env.EMAIL_PASS || '',
      },
    });

    this.transporter.verify((error) => {
      if (error) {
        console.error('Contact Email setup error:', error);
      } else {
        console.log('Email transporter is ready to send messages.');
      }
    });
  }

  async sendMail(mailOptions: Mail.Options): Promise<void> {
    return new Promise((resolve, reject) => {
      this.transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          console.log('Email sent:', info.response);
          resolve();
        }
      });
    });
  }
}

export const contactRepository = new ContactRepository();
