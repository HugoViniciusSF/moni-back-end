import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('email')
  async sendEmail(@Body() { to, subject, body }: { to: string; subject: string; body: string }): Promise<void> {
    await this.notificationService.sendNotification(to, subject, body);
  }
}