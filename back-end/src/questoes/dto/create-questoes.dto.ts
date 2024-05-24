import { IsString, IsBoolean, IsNotEmpty } from "class-validator";
export class CreateQuestoesDto {
    
    @IsNotEmpty()
    @IsString()
    readonly nome: string;

    @IsNotEmpty()
    @IsString()
    readonly fotoURL: string;

    @IsNotEmpty()
    @IsString()
    readonly descricao: string;

    @IsNotEmpty()
    @IsBoolean()
    readonly respondido: boolean;

    @IsNotEmpty()
    @IsBoolean()
    readonly prioridade: boolean;
}