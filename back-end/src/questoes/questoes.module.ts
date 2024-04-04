import { Module } from '@nestjs/common';
import { QuestoesService } from './questoes.service';
import { QuestoesController } from './questoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Questoes } from './entities/questoes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Questoes])],
  controllers: [QuestoesController],
  providers: [QuestoesService],
})
export class QuestoesModule {}
