import { InfoEntity } from './info.entity';

export abstract class InfoScrapingFacade {
  abstract getInfo(): Promise<InfoEntity[]>;
}