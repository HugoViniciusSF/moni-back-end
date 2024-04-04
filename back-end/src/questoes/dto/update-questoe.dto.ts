import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestoeDto } from './create-questoe.dto';

export class UpdateQuestoeDto extends PartialType(CreateQuestoeDto) {}
