import { Module } from '@nestjs/common';
import { ReuniaoService } from './reuniao.service';
import { ReuniaoController } from './reuniao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reuniao } from './entities/reuniao.entity';
import { ReuniaoRepository } from './repo/reuniao.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Reuniao])],
    controllers: [ReuniaoController],
    providers: [ReuniaoService, ReuniaoRepository],
  })
  export class ReuniaoModule {}
  
