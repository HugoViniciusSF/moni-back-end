import { Module } from '@nestjs/common';
import { ReunioesService } from './reunioes.service';
import { ReunioesController } from './reunioes.controller';
import { Reunioes } from './entities/reunioes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReunioesRepository } from './repo/reunioes.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Reunioes])],
  controllers: [ReunioesController],
  providers: [ReunioesService, ReunioesRepository],
})
export class ReunioesModule {}
