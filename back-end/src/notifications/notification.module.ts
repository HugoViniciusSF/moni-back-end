import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { EmailNotificationStrategy } from './email-notification.strategy';
import { SmsNotificationStrategy } from './sms-notification.strategy';
import { NotificationStrategy } from './notification.strategy';

@Module({
  providers: [
    NotificationService,
    EmailNotificationStrategy,
    SmsNotificationStrategy,
    {
      provide: 'NotificationStrategies',
      useFactory: (...strategies: NotificationStrategy[]) => strategies,
      inject: [EmailNotificationStrategy, SmsNotificationStrategy],
    },
  ],
  controllers: [NotificationController],
})
export class NotificationModule {}