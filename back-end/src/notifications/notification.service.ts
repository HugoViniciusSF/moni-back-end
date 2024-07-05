import { Injectable, Inject } from '@nestjs/common';
import { NotificationStrategy } from './notification.strategy';

@Injectable()
export class NotificationService {
  constructor(@Inject('NotificationStrategies') private readonly strategies: NotificationStrategy[]) {}

  async sendNotification(to: string, subject: string, body: string, strategy: string): Promise<void> {
    const selectedStrategy = this.strategies.find((s) => s.getName() === strategy);
    if (!selectedStrategy) {
      throw new Error(`Notification strategy '${strategy}' not found.`);
    }
    await selectedStrategy.send(to, subject, body);
  }
}