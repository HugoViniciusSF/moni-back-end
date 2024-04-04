import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestoesModule } from './questoes/questoes.module';

@Module({
  imports: [QuestoesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
