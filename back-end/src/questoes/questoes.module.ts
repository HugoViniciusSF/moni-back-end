import { Module } from '@nestjs/common';
import { QuestoesService } from './questoes.service';
import { QuestoesController } from './questoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Questoes } from './entities/questoes.entity';
import { QuestoesRepository } from './repo/questoes.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Questoes])],
  controllers: [QuestoesController],
  providers: [QuestoesService, QuestoesRepository],
})
export class QuestoesModule {}
