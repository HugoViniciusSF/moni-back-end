import { Injectable, Provider } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { InfoGatheringFacade } from "../info.gathering.facade";
import { NoticiaData } from "../noticia.entity";

@Injectable()
export class InfoGatheringFacadeNoticias implements InfoGatheringFacade {
  private readonly baseUrl = "https://newsapi.org/v2";
  private readonly apiKey = process.env.NEWS_API_KEY;

  constructor(private readonly httpService: HttpService) { }

  async getInfo(query: string): Promise<NoticiaData[]> {
    const noticias: NoticiaData[] = [];

    try {
      const response = await this.httpService.axiosRef.get(
        `${this.baseUrl}/everything`,
        {
          params: {
            q: query,
            apiKey: this.apiKey,
            language: 'pt', // Definir o idioma desejado para as notícias
            pageSize: 20, 
          },
        }
      );

      const data = response.data;
      console.log("Data received from News API:", data);

      data.articles.forEach((article) => {
        const id = article.url; 
        const nome = article.title;
        const imagemURL = article.urlToImage;
        const descricao = article.description;

        noticias.push({ id, nome, imagemURL, descricao });
      });

      console.log("Noticias array:", noticias);

      return noticias;
    } catch (error) {
      console.log("Error:", error.response.data);
    }

    return noticias;
  }
}

export const InfoGatheringFacadeProviderNoticias: Provider = {
  provide: InfoGatheringFacade,
  useClass: InfoGatheringFacadeNoticias,
};
