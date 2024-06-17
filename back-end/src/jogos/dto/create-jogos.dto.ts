import { IsString, IsNotEmpty } from "class-validator";
export class CreateJogosDto {
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
    readonly genero: string;

    @IsNotEmpty()
    @IsString()
    readonly plataforma: string;
}
