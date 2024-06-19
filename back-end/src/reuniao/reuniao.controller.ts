import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ReuniaoService } from './reuniao.service';
import { CreateReuniaoDto } from './dto/create-reuniao.dto';
import { UpdateReuniaoDto } from './dto/update-reuniao.dto';

@Controller('reuniao')
export class ReuniaoController {
  constructor(private readonly reuniaoService: ReuniaoService) {}

  @Post()
  create(@Body() createReuniaoDto: CreateReuniaoDto) {
    try{
      return this.reuniaoService.create(createReuniaoDto);
    }
    catch(error){
      throw new HttpException('Erro ao tentar criar a reunião',
       HttpStatus.INTERNAL_SERVER_ERROR);
    }	
  }

  @Get()
  findAll() {
    return this.reuniaoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.reuniaoService.findOne(id);
      if(!result){
        throw new HttpException(`Reunião ${id} não encontrado`,
        HttpStatus.NOT_FOUND);
      }
    return result;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReuniaoDto: UpdateReuniaoDto) {
    return this.reuniaoService.update(id, updateReuniaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reuniaoService.delete(id);
  }
}
