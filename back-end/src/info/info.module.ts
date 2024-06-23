import { Module } from '@nestjs/common';
import { InfoController } from './info.controller';
import { InfoServiceProvider } from './info.service';
import { HttpModule } from '@nestjs/axios';
import { InfoGatheringFacadeProviderJogos } from './providers/info.gathering.facade.jogos';
import { ConfigModule } from '@nestjs/config';
import { InfoGatheringFacadeProviderQuestoes } from './providers/info.gathering.facade.questoes';

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
  ],
})
export class InfoModule { }