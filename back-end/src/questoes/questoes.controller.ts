import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestoesService } from './questoes.service';
import { CreateQuestoesDto } from './dto/create-questoes.dto';
import { UpdateQuestoesDto } from './dto/update-questoes.dto';

@Controller('questoes')
export class QuestoesController {
  constructor(private readonly questoesService: QuestoesService) {}

  @Post()
  create(@Body() createQuestoesDto: CreateQuestoesDto) {
    return this.questoesService.create(createQuestoesDto);
  }

  @Get()
  findAll() {
    return this.questoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestoeDto: UpdateQuestoesDto) {
    return this.questoesService.update(+id, updateQuestoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questoesService.remove(+id);
  }
}
