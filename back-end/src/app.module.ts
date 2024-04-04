import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestoesModule } from './questoes/questoes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Questoes } from './questoes/entities/questoes.entity';
@Module({
  imports: [QuestoesModule,  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db/sql',
    synchronize: true,
    entities: [Questoes],
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
