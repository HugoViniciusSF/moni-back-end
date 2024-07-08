import { Test, TestingModule } from '@nestjs/testing';
import { InfoService } from './info.service';
import { InfoData } from './info.entity';

class InfoServiceMock implements InfoService {
  async getInfo(): Promise<InfoData[]> {
    return [];
  }
}

describe('InfoService', () => {
  let service: InfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: InfoService,
          useClass: InfoServiceMock,
        },
      ],
    }).compile();

    service = module.get<InfoService>(InfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});