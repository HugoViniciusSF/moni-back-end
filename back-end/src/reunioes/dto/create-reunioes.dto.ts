import { IsString, IsBoolean, IsNotEmpty } from "class-validator";
export class CreateReunioesDto {
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
    @IsString()
    readonly local: string;

    @IsNotEmpty()
    @IsString()
    readonly presenca: string;

    @IsNotEmpty()
    @IsBoolean()
    readonly certificado: boolean;

}
