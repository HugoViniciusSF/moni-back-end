import { Injectable } from '@nestjs/common';
import { NotificationStrategy } from './notification.strategy';
import { Twilio } from 'twilio';

@Injectable()
export class SmsNotificationStrategy implements NotificationStrategy {
  private readonly client: Twilio;

  constructor() {
    this.client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  }

  async send(to: string, subject: string, body: string): Promise<void> {
    await this.client.messages.create({
      body: `${subject}\n\n${body}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
    });
  }
}