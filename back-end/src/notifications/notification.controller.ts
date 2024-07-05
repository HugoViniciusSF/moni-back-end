import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  async sendNotification(
    @Body() { to, subject, body, strategy }: { to: string; subject: string; body: string; strategy: string },
  ): Promise<void> {
    await this.notificationService.sendNotification(to, subject, body, strategy);
  }
}