import { Module } from '@nestjs/common';
import { JogosService } from './jogos.service';
import { JogosController } from './jogos.controller';
import { Jogos } from './entities/jogos.entity';
import { JogosRepository } from './repo/jogos.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Jogos])],
  controllers: [JogosController],
  providers: [JogosService, JogosRepository],
})
export class JogosModule {}
