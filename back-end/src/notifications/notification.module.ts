import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { EmailNotificationStrategy } from './email-notification.strategy';
import { SmsNotificationStrategy } from './sms-notification.strategy';

@Module({
  providers: [
    NotificationService,
    {
      provide: 'EmailNotificationStrategy',
      useClass: EmailNotificationStrategy,
    },
    {
      provide: 'SmsNotificationStrategy',
      useClass: SmsNotificationStrategy,
    },
  ],
  controllers: [NotificationController],
})
export class NotificationModule {}