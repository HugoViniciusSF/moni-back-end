import { InfoEntity } from './info.entity';

export abstract class InfoGatheringFacade {
  abstract getInfo(topico: string): Promise<InfoEntity[]>;
}