import { Module } from '@nestjs/common';
import { QuestoesService } from './questoes.service';
import { QuestoesController } from './questoes.controller';

@Module({
  controllers: [QuestoesController],
  providers: [QuestoesService],
})
export class QuestoesModule {}
