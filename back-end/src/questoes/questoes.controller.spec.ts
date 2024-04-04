import { Test, TestingModule } from '@nestjs/testing';
import { QuestoesController } from './questoes.controller';
import { QuestoesService } from './questoes.service';

describe('QuestoesController', () => {
  let controller: QuestoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestoesController],
      providers: [QuestoesService],
    }).compile();

    controller = module.get<QuestoesController>(QuestoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
