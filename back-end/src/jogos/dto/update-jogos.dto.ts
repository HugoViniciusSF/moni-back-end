import { PartialType } from '@nestjs/mapped-types';
import {CreateJogosDto } from './create-jogos.dto';

export class UpdateJogosDto extends PartialType(CreateJogosDto) {}
