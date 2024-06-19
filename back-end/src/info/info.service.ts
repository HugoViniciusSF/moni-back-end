import { Inject, Injectable, Provider } from '@nestjs/common';
import { InfoEntity } from './info.entity';
import { InfoGatheringFacade } from './info.gathering.facade';
import { InfoGatheringFacadeJogos } from './providers/info.gathering.facade.jogos';

export abstract class InfoService {
  abstract getInfo(): Promise<InfoEntity[]>;
}

@Injectable()
export class InfoServiceImpl implements InfoService {
  constructor(
    @Inject(InfoGatheringFacade)
    private readonly infoScrapingFacade: InfoGatheringFacade,
  ) { }

  async getInfo(): Promise<InfoEntity[]> {
    const output = await this.infoScrapingFacade.getInfo();
    return output;
  }
}

export const InfoServiceProvider: Provider = {
  provide: InfoService,
  useClass: InfoServiceImpl,
};