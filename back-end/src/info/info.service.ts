import { Inject, Injectable, Provider } from '@nestjs/common';
import { InfoData } from './info.entity';
import { InfoGatheringFacade } from './info.gathering.facade';

export abstract class InfoService {
  abstract getInfo(topico: string): Promise<InfoData[]>;
}

@Injectable()
export class InfoServiceImpl implements InfoService {
  constructor(
    @Inject(InfoGatheringFacade)
    private readonly infoScrapingFacade: InfoGatheringFacade,
  ) { }

  async getInfo(topico: string): Promise<InfoData[]> {
    const output = await this.infoScrapingFacade.getInfo(topico);
    return output;
  }
}

export const InfoServiceProvider: Provider = {
  provide: InfoService,
  useClass: InfoServiceImpl,
};