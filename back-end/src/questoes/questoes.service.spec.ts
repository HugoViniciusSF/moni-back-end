import { Test, TestingModule } from '@nestjs/testing';
import { QuestoesService } from './questoes.service';

describe('QuestoesService', () => {
  let service: QuestoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestoesService],
    }).compile();

    service = module.get<QuestoesService>(QuestoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
