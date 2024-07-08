import { IsString, IsNotEmpty } from "class-validator";

export class CreateBaseEntityDto {
    @IsNotEmpty()
    @IsString()
    readonly nome: string;

    @IsNotEmpty()
    @IsString()
    readonly fotoURL: string;

    @IsNotEmpty()
    @IsString()
    readonly descricao: string;
}