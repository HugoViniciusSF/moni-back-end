import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestoesModule } from './questoes/questoes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Questoes } from './questoes/entities/questoes.entity';
import { Jogos } from './jogos/entities/jogos.entity';
import { Reuniao } from './reuniao/entities/reuniao.entity';
import { ReuniaoModule } from './reuniao/reuniao.module';
import { JogosModule } from './jogos/jogos.module';
import { InfoData } from './info/info.entity';
import { HttpModule } from '@nestjs/axios';
import { InfoModule } from './info/info.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { NotificationModule } from './notifications/notification.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    QuestoesModule,
    JogosModule,
    ReuniaoModule,
    InfoModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql',
      synchronize: true,
      entities: [Questoes, Jogos, Reuniao, InfoData],
    }),
    HttpModule,
    ConfigModule.forRoot(),
    NotificationModule,
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get('MAIL_HOST'),
          port: configService.get('MAIL_PORT'),
          secure: false,
          auth: {
            user: configService.get('MAIL_USER'),
            pass: configService.get('MAIL_PASSWORD'),
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}