import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestoesDto } from './create-questoes.dto';

export class UpdateQuestoesDto extends PartialType(CreateQuestoesDto) {}
