import { IsNotEmpty, IsNumber } from 'class-validator';

export class DeleteQuestoesDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;
}