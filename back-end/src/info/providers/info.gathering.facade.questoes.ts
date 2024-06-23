import { Injectable, Provider } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { InfoGatheringFacade } from "../info.gathering.facade";
import { QuestaoData, QuestaoDataComTopico } from "../questao.entity";

@Injectable()
export class InfoGatheringFacadeQuestoes implements InfoGatheringFacade {
  private readonly baseUrl = "https://api.stackexchange.com/2.3";
  private readonly site = "stackoverflow";

  constructor(private readonly httpService: HttpService) {}

  async getInfo(): Promise<QuestaoData[]> {
    const questoes: QuestaoDataComTopico[] = [];

    try {
      const response = await this.httpService.axiosRef.get(
        `${this.baseUrl}/search/advanced`,
        {
          params: {
            site: this.site,
            order: "desc",
            sort: "votes",
            pagesize: 10,
            filter: "!9_bDDxJY5",
            q: "typescript",
          },
        }
      );

      const data = response.data.items;
      console.log("Data received from Stack Overflow API:", data);

      data.forEach((question) => {
        const id = question.question_id;
        const nome = question.owner.display_name;
        const imagemURL = question.owner.profile_image;
        const descricao = question.title;
        const respondido = question.is_answered;
        const prioridade = question.score >= 10;
        const topico = "typescript";

        questoes.push({ id, nome, imagemURL, descricao, respondido, prioridade, topico });
      });

      console.log("Questões array:", questoes);

      return questoes;
    } catch (error) {
      console.log("Error:", error.response.data);
    }

    return questoes;
  }
}

export const InfoGatheringFacadeProviderQuestoes: Provider = {
  provide: InfoGatheringFacade,
  useClass: InfoGatheringFacadeQuestoes,
};