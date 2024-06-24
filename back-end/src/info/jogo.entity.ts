import { InfoEntity } from './info.entity';

export interface JogoData extends InfoEntity {
    generos: string | null;
    plataformas: string | null;
}