import { Module } from '@nestjs/common';
import { InfoController } from './info.controller';
import { InfoServiceProvider } from './info.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { InfoGatheringFacadeProviderQuestoes } from './providers/info.gathering.service.questoes';
import { InfoGatheringFacadeProviderNoticias } from './providers/info.gathering.service.noticias';
import { InfoGatheringFacadeProviderJogos } from './providers/info.gathering.service.jogos';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(),
  ],
  controllers: [InfoController],
  providers: [
    InfoServiceProvider,
    //InfoGatheringFacadeProviderQuestoes,
    InfoGatheringFacadeProviderJogos,
    //InfoGatheringFacadeProviderNoticias,
  ],
})
export class InfoModule { }