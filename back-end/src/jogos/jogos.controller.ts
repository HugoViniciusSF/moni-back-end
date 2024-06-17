import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { JogosService } from './jogos.service';
import { CreateJogosDto } from './dto/create-jogos.dto';
import { UpdateJogosDto } from './dto/update-jogos.dto';

@Controller('jogos')
export class JogosController {
  constructor(private readonly jogosService: JogosService) {}

  @Post()
  create(@Body() createJogosDto: CreateJogosDto) {
    try{
      return this.jogosService.create(createJogosDto);
    }
    catch(error){
      throw new HttpException('Erro ao tentar criar o jogo',
       HttpStatus.INTERNAL_SERVER_ERROR);
    }	
  }

  @Get()
  findAll() {
    return this.jogosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.jogosService.findOne(id);
      if(!result){
        throw new HttpException(`Jogo ${id} não encontrado`,
        HttpStatus.NOT_FOUND);
      }
    return result;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJogosDto: UpdateJogosDto) {
    return this.jogosService.update(id, updateJogosDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jogosService.delete(id);
  }
}
