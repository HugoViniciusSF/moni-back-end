import { Controller, Get, Param } from '@nestjs/common';
import { InfoService } from './info.service';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Get(':topico')
  async getInfo(@Param('topico') topico: string) {
    const output = await this.infoService.getInfo(topico);
    return output;
  }
}