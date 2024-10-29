// src/services/contact-service.ts

import { contactRepository } from '../repositories';
import path from 'path';
import fs from 'fs';
import { mailService } from './mail-service';
import { EmailTemplate } from '../constants/enums/email-template-enum';
import { Contact } from '@web-porto-core';

class ContactService {
  async sendContactEmail(contactData: Contact): Promise<void> {
    const { name } = contactData;
    const emailTemplate = mailService.constructMail(
      contactData,
      EmailTemplate.DEFAULT
    );

    const toEmail = process.env.EMAIL_USER;

    const mailOptions = {
      from: name, // Sender's name or email
      to: toEmail,
      subject: 'Contact Form Submission - Portfolio',
      html: emailTemplate,
    };

    await contactRepository.sendMail(mailOptions);
  }
}

export const contactService = new ContactService();
