import { Test, TestingModule } from '@nestjs/testing';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';

describe('InfoController', () => {
  let controller: InfoController;
  let infoService: InfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoController],
      providers: [
        {
          provide: InfoService,
          useValue: {
            getInfo: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<InfoController>(InfoController);
    infoService = module.get<InfoService>(InfoService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getInfo', () => {
    it('should call infoService.getInfo with the provided topic', async () => {
      const topico = 'test';
      await controller.getInfo(topico);
      expect(infoService.getInfo).toHaveBeenCalledWith(topico);
    });
  });
});