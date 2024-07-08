import { Module } from '@nestjs/common';
import { InfoController } from './info.controller';
import { InfoServiceProvider } from './info.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { InfoGatheringFacadeQuestoes } from './providers/info.gathering.service.questoes';
import { InfoGatheringFacadeNoticias } from './providers/info.gathering.service.noticias';
import { InfoGatheringFacadeJogos } from './providers/info.gathering.service.jogos';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(),
  ],
  controllers: [InfoController],
  providers: [
    InfoServiceProvider,
    //InfoGatheringFacadeQuestoes,
    //InfoGatheringFacadeJogos,
    InfoGatheringFacadeNoticias,
  ],
})
export class InfoModule { }