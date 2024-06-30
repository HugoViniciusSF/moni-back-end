import { Injectable, Inject } from '@nestjs/common';
import { NotificationStrategy } from './notification.strategy';

@Injectable()
export class NotificationService {
  constructor(@Inject('NotificationStrategy') private readonly emailStrategy: NotificationStrategy) {}

  async sendNotification(to: string, subject: string, body: string): Promise<void> {
    await this.emailStrategy.send(to, subject, body);
  }
}