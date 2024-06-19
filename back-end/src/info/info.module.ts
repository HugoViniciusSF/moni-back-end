import { Module } from '@nestjs/common';
import { InfoController } from './info.controller';
import { InfoServiceProvider } from './info.service';
import { HttpModule } from '@nestjs/axios';
import { InfoGatheringFacadeProviderJogos } from './providers/info.gathering.facade.jogos';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(),
  ],
  controllers: [InfoController],
  providers: [
    InfoServiceProvider,
    InfoGatheringFacadeProviderJogos,
  ],
})
export class InfoModule { }