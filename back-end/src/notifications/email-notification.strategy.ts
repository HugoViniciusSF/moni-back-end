import { Injectable } from '@nestjs/common';
import { NotificationStrategy } from './notification.strategy';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailNotificationStrategy implements NotificationStrategy {
  constructor(private readonly mailerService: MailerService) {}

  async send(to: string, subject: string, body: string): Promise<void> {
    await this.mailerService.sendMail({
      to,
      subject,
      text: body,
    });
  }
}