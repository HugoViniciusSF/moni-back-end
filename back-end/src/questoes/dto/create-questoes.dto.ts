import { IsString, IsBoolean } from "class-validator";
export class CreateQuestoesDto {
    
    @IsString()
    readonly nome: string;

    @IsString()
    readonly fotoURL: string;

    @IsString()
    readonly descricao: string;

    @IsBoolean()
    readonly respondido: boolean;

    @IsBoolean()
    readonly prioridade: boolean;
}