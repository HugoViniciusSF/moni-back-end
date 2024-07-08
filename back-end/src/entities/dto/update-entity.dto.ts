import { PartialType } from '@nestjs/mapped-types';
import { CreateBaseEntityDto } from './create-entity.dto';

export class UpdateBaseEntityDto extends PartialType(CreateBaseEntityDto) { }