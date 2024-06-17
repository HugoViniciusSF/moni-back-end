import { PartialType } from '@nestjs/mapped-types';
import { CreateReunioesDto } from './create-reunioes.dto';

export class UpdateReunioesDto extends PartialType(CreateReunioesDto) {}
