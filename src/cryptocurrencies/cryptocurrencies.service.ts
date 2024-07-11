import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpCustomService } from 'src/providers/http/http.service';
import { Cryptocurrency } from './cryptocurrency.entity';
import { GetCryptocurrenciesResponseDto } from './dto/getCryptocurrenciesResponse.dto';
import { GetCryptocurrencyResponseDto } from './dto/getCryptocurrencyResponse.dto';
import { CryptocurrencyResponseMock } from './mocks/cryptocurrencyResponseMock.service';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class CryptocurrenciesService {
  constructor(
    private readonly cryptocurrencyResponseMock: CryptocurrencyResponseMock,
    private readonly configService: ConfigService,
    private readonly httpCustomService: HttpCustomService,
  ) {}
  private async fetchCryptocurrencies(): Promise<Cryptocurrency[]> {
    try {
      // const COINMARKETCAP_BASE_URL = this.configService.get<string>(
      //   'COINMARKETCAP_BASE_URL',
      // );
      // const COINMARKETCAP_API_KEY = this.configService.get<string>(
      //   'COINMARKETCAP_API_KEY',
      // );
      // const config = {
      //   headers: {
      //     'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY,
      //   },
      // };
      // const response = await this.httpCustomService.apiFindAll(
      //   COINMARKETCAP_BASE_URL,
      //   config,
      // );
      // return response;

      // // Mocked response for testing purposes
      const response =
        await this.cryptocurrencyResponseMock.fetchCryptocurrenciesMock();
      return response;
    } catch (error) {
      console.error('Error fetching cryptocurrencies', error);
      throw error;
    }
  }

  async getTopCryptocurrencies(): Promise<GetCryptocurrenciesResponseDto> {
    try {
      const reponse = await this.fetchCryptocurrencies();
      if (reponse.length < 5) {
        throw new ErrorManager({
          type: 'INTERNAL_SERVER_ERROR',
          message: 'Internal server error',
        });
      }
      return {
        status: 'Success',
        error: null,
        data: reponse.slice(0, 5),
      };
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async getCryptocurrency(
    symbol: string,
  ): Promise<GetCryptocurrencyResponseDto> {
    try {
      const reponse = await this.fetchCryptocurrencies();
      const dataFiltered = reponse.filter(
        (cryptocurrency: Cryptocurrency) =>
          cryptocurrency.symbol === symbol.toUpperCase(),
      )[0];
      if (!dataFiltered) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Symbol not found',
        });
      }
      return {
        status: 'Success',
        error: null,
        data: dataFiltered,
      };
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
