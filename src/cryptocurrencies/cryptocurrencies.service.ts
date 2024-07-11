import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
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
  ) {}
  private async fetchCryptocurrencies(): Promise<Cryptocurrency[]> {
    // const COINMARKETCAP_BASE_URL = this.configService.get<string>(
    //   'COINMARKETCAP_BASE_URL',
    // );
    // const COINMARKETCAP_API_KEY = this.configService.get<string>(
    //   'COINMARKETCAP_API_KEY',
    // );
    try {
      // const response = await fetch(COINMARKETCAP_BASE_URL, {
      //   method: 'GET',
      //   headers: {
      //     'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY,
      //   },
      // });
      // const responseJson = await response.json();
      // return responseJson.data;

      // Mocked response for testing purposes
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
      const fetchCryptocurrenciesData = await this.fetchCryptocurrencies();
      if (fetchCryptocurrenciesData.length < 5) {
        throw new ErrorManager({
          type: 'INTERNAL_SERVER_ERROR',
          message: 'Internal server error',
        });
      }
      return {
        status: 'Success',
        error: null,
        data: fetchCryptocurrenciesData.slice(0, 5),
      };
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async getCryptocurrency(
    symbol: string,
  ): Promise<GetCryptocurrencyResponseDto> {
    try {
      const fetchCryptocurrenciesData = await this.fetchCryptocurrencies();
      const responseFiltered = fetchCryptocurrenciesData.filter(
        (cryptocurrency: Cryptocurrency) =>
          cryptocurrency.symbol === symbol.toUpperCase(),
      )[0];
      if (!responseFiltered) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Symbol not found',
        });
      }
      return {
        status: 'Success',
        error: null,
        data: responseFiltered,
      };
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
