import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestoesService } from './questoes.service';
import { CreateQuestoeDto } from './dto/create-questoe.dto';
import { UpdateQuestoeDto } from './dto/update-questoe.dto';

@Controller('questoes')
export class QuestoesController {
  constructor(private readonly questoesService: QuestoesService) {}

  @Post()
  create(@Body() createQuestoeDto: CreateQuestoeDto) {
    return this.questoesService.create(createQuestoeDto);
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
  update(@Param('id') id: string, @Body() updateQuestoeDto: UpdateQuestoeDto) {
    return this.questoesService.update(+id, updateQuestoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questoesService.remove(+id);
  }
}
