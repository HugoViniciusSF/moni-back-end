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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }