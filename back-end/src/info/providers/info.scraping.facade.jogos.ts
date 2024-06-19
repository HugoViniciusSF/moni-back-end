import { Injectable, Provider } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { InfoScrapingFacade } from "../info.scraping.facade";
import { JogoData } from "../jogo.entity";
import * as qs from 'qs';

@Injectable()
export class InfoScrapingFacadeJogos implements InfoScrapingFacade {
  private readonly baseUrl = "https://api.igdb.com/v4";
  private readonly clientId = process.env.IGDB_CLIENT_ID;
  private readonly clientSecret = process.env.IGDB_CLIENT_SECRET;

  constructor(private readonly httpService: HttpService) {}

  async getAccessToken(): Promise<string> {
    const data = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      grant_type: 'client_credentials',
    };

    const response = await this.httpService.axiosRef.post(
      'https://id.twitch.tv/oauth2/token',
      qs.stringify(data),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return response.data.access_token;
  }

  async getInfo(): Promise<JogoData[]> {
    const jogos: JogoData[] = [];

    try {
      const accessToken = await this.getAccessToken();
      console.log("Access Token:", accessToken);

      const response = await this.httpService.axiosRef.post(
        `${this.baseUrl}/games`,
        `fields id, name, summary, cover.url, genres.name, platforms.name; limit 10;`,
        {
          headers: {
            "Client-ID": this.clientId,
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = response.data;
      console.log("Data received from IGDB API:", data);

      data.forEach((game) => {
        const id = game.id;
        const nome = game.name;
        const imagemURL = game.cover ? game.cover.url : null;
        const descricao = game.summary;
        const generos = game.genres ? game.genres.map((genre) => genre.name).join(', ') : null;
        const plataformas = game.platforms ? game.platforms.map((platform) => platform.name).join(', ') : null;

        jogos.push({ id, nome, imagemURL, descricao, generos, plataformas });
      });

      console.log("Jogos array:", jogos);

      if (jogos.length > 0) {
        const jogoAleatorio = jogos[Math.floor(Math.random() * jogos.length)];
        console.log("Jogo aleatório:", jogoAleatorio);
        return [jogoAleatorio];
      } else {
        console.log("Nenhum jogo encontrado.");
      }
    } catch (error) {
      console.log("Error:", error.response.data);
    }

    return jogos;
  }
}

export const InfoScrapingFacadeProviderJogos: Provider = {
  provide: InfoScrapingFacade,
  useClass: InfoScrapingFacadeJogos,
};