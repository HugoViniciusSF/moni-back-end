import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { QuestoesService } from './questoes.service';
import { CreateQuestoesDto } from './dto/create-questoes.dto';
import { UpdateQuestoesDto } from './dto/update-questoes.dto';

@Controller('questoes')
export class QuestoesController {
  constructor(private readonly questoesService: QuestoesService) {}

  @Post()
  create(@Body() createQuestoesDto: CreateQuestoesDto) {
    try{
      return this.questoesService.create(createQuestoesDto);
    }
    catch(error){
      throw new HttpException('Erro ao tentar criar a questão',
       HttpStatus.INTERNAL_SERVER_ERROR);
    }	
  }

  @Get()
  findAll() {
    return this.questoesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.questoesService.findOne(+id);
      if(!result){
        throw new HttpException(`Questão ${id} não encontrada`,
        HttpStatus.NOT_FOUND);
      }
    return result;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestoeDto: UpdateQuestoesDto) {
    return this.questoesService.update(+id, updateQuestoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questoesService.delete(+id);
  }
}
