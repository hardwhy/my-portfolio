import path from 'path';
import fs from 'fs';
import { Contact } from '@web-porto-core';

class MailService {
  constructMail(data: Contact, template: string): string {
    const { email, message } = data;
    // In production, the file will be located in the dist folder
    const filePath = path.join(
      process.cwd(),
      `dist/apps/web-porto-api/assets/email-templates/${template}`
    );

    let emailTemplate = fs.readFileSync(filePath, 'utf-8');

    const today = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
      weekday: 'long', // Full name of the day (e.g., Monday)
      day: '2-digit', // Two-digit day (e.g., 21)
      month: 'long', // Full name of the month (e.g., October)
      year: 'numeric', // Full year (e.g., 2024)
    }).format(today);

    // Replace placeholders with dynamic content
    emailTemplate = emailTemplate.replace(/{{date}}/g, formattedDate);
    emailTemplate = emailTemplate.replace(
      /{{senderPhoneNumber}}/g,
      '081218829455'
    );
    emailTemplate = emailTemplate.replace(/{{senderMail}}/g, email);
    emailTemplate = emailTemplate.replace(/{{message}}/g, message);

    return emailTemplate;
  }
}

export const mailService = new MailService();
