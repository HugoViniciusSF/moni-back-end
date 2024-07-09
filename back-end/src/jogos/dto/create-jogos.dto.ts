import { IsString, IsNotEmpty } from "class-validator";
import { CreateBaseEntityDto } from "src/entities/dto/create-entity.dto";
export class CreateJogosDto extends CreateBaseEntityDto {
    @IsNotEmpty()
    @IsString()
    readonly genero: string;

    @IsNotEmpty()
    @IsString()
    readonly plataforma: string;
}
