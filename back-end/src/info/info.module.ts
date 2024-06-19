import { Module } from '@nestjs/common';
import { InfoController } from './info.controller';
import { InfoServiceProvider } from './info.service';
import { HttpModule } from '@nestjs/axios';
import { InfoScrapingFacadeProviderJogos } from './providers/info.scraping.facade.jogos';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(),
  ],
  controllers: [InfoController],
  providers: [
    InfoServiceProvider,
    InfoScrapingFacadeProviderJogos,
  ],
})
export class InfoModule {}