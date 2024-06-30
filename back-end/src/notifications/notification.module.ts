import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { EmailNotificationStrategy } from './email-notification.strategy';

@Module({
  providers: [
    NotificationService,
    {
      provide: 'NotificationStrategy',
      useClass: EmailNotificationStrategy,
    },
  ],
  controllers: [NotificationController],
})
export class NotificationModule {}