import { InfoEntity } from './info.entity';

export abstract class InfoGatheringFacade {
  abstract getInfo(): Promise<InfoEntity[]>;
}