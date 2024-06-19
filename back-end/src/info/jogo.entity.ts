import { InfoData } from './info.entity';

export interface JogoData extends InfoData {
    generos: string | null;
    plataformas: string | null;
}