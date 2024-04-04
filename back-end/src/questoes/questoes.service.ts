import { Injectable } from '@nestjs/common';
import { CreateQuestoeDto } from './dto/create-questoe.dto';
import { UpdateQuestoeDto } from './dto/update-questoe.dto';

@Injectable()
export class QuestoesService {
  create(createQuestoeDto: CreateQuestoeDto) {
    return 'This action adds a new questoe';
  }

  findAll() {
    return `This action returns all questoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} questoe`;
  }

  update(id: number, updateQuestoeDto: UpdateQuestoeDto) {
    return `This action updates a #${id} questoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} questoe`;
  }
}
