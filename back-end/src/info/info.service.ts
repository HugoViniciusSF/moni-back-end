import { Inject, Injectable, Provider } from '@nestjs/common';
import { InfoEntity } from './info.entity';
import { InfoScrapingFacade } from './info.scraping.facade';
import { InfoScrapingFacadeJogos } from './providers/info.scraping.facade.jogos';

export abstract class InfoService {
  abstract getInfo(): Promise<InfoEntity[]>;
}

@Injectable()
export class InfoServiceImpl implements InfoService {
  constructor(
    @Inject(InfoScrapingFacade)
    private readonly infoScrapingFacade: InfoScrapingFacade,
  ) {}

  async getInfo(): Promise<InfoEntity[]> {
    const output = await this.infoScrapingFacade.getInfo();
    return output;
  }
}

export const InfoServiceProvider: Provider = {
  provide: InfoService,
  useClass: InfoServiceImpl,
};