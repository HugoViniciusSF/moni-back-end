import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ReunioesService } from './reunioes.service';
import { CreateReunioesDto } from './dto/create-reunioes.dto';
import { UpdateReunioesDto } from './dto/update-reunioes.dto';

@Controller('reunioes')
export class ReunioesController {
  constructor(private readonly reunioesService: ReunioesService) {}

  @Post()
  create(@Body() createReunioeDto: CreateReunioesDto) {
    try {
      return this.reunioesService.create(createReunioeDto);
    } catch (error) {
      throw new HttpException('Erro ao tentar criar a reunião',
        HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  findAll() {
    return this.reunioesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.reunioesService.findOne(id);
    if(!result){
      throw new HttpException(`Reunião ${id} não encontrada`,
        HttpStatus.NOT_FOUND);
    }
    return result;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReunioesDto: UpdateReunioesDto) {
    return this.reunioesService.update(id, updateReunioesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reunioesService.remove(id);
  }
}
