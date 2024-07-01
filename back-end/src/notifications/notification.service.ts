import { Injectable, Inject } from '@nestjs/common';
import { NotificationStrategy } from './notification.strategy';

@Injectable()
export class NotificationService {
  constructor(
    @Inject('EmailNotificationStrategy') private readonly emailStrategy: NotificationStrategy,
    @Inject('SmsNotificationStrategy') private readonly smsStrategy: NotificationStrategy,
  ) {}

  async sendEmailNotification(to: string, subject: string, body: string): Promise<void> {
    await this.emailStrategy.send(to, subject, body);
  }

  async sendSmsNotification(to: string, subject: string, body: string): Promise<void> {
    await this.smsStrategy.send(to, subject, body);
  }
}