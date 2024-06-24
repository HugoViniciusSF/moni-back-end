import { InfoEntity } from './info.entity';

export interface QuestaoData extends InfoEntity {
    respondido: boolean;
    prioridade: boolean;
}

export interface QuestaoDataComTopico extends QuestaoData {
    topico: string;
}