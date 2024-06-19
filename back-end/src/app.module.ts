import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestoesModule } from './questoes/questoes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Questoes } from './questoes/entities/questoes.entity';
import { Jogos } from './jogos/entities/jogos.entity';
import { Reuniao } from './reuniao/entities/reuniao.entity';
import { JogosModule } from './jogos/jogos.module';
import { ReuniaoModule } from './reuniao/reuniao.module';
import { InfoEntity } from './info/info.entity';
import { Reunioes } from './reunioes/entities/reunioes.entity';
import { JogosModule } from './jogos/jogos.module';
import { ReunioesModule } from './reunioes/reunioes.module';
import { HttpModule } from '@nestjs/axios';
import { InfoModule } from './info/info.module';

@Module({
  imports: [
    QuestoesModule,
    JogosModule,
    ReuniaoModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql',
      synchronize: true,
      entities: [Questoes, Jogos, Reuniao],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}