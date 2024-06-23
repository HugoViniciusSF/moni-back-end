import { InfoData } from './info.entity';

export interface QuestaoData extends InfoData {
    respondido: boolean;
    prioridade: boolean;
}

export interface QuestaoDataComTopico extends QuestaoData {
    topico: string;
}