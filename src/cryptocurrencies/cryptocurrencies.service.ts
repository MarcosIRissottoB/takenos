import { Injectable } from '@nestjs/common';
import { Cryptocurrency } from './cryptocurrency.entity';
import { GetCryptocurrenciesResponseDto } from './dto/getCryptocurrenciesResponse.dto';
import { GetCryptocurrencyResponseDto } from './dto/getCryptocurrencyResponse.dto';
import { CryptocurrencyResponseMock } from './mocks/cryptocurrencyResponseMock.service';

@Injectable()
export class CryptocurrenciesService {
  constructor(
    private readonly cryptocurrencyResponseMock: CryptocurrencyResponseMock,
  ) {}
  private async fetchCryptocurrencies(): Promise<Cryptocurrency[]> {
    // const COINMARKETCAP_BASE_URL = process.env.COINMARKETCAP_BASE_URL;
    // const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
    try {
      // const response = await fetch(COINMARKETCAP_BASE_URL, {
      //   method: 'GET',
      //   headers: {
      //     'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY,
      //   },
      // });
      // const responseJson = await response.json();
      // console.error('responseJson', responseJson);
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
      return {
        status: 'Success',
        error: null,
        data: fetchCryptocurrenciesData.slice(0, 5),
      };
    } catch (error) {
      return {
        status: 'Error',
        error,
        data: null,
      };
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
        return {
          status: 'Error',
          error: {
            errorMessage: 'Symbol not found',
          },
          data: null,
        };
      }
      return {
        status: 'Success',
        error: null,
        data: responseFiltered,
      };
    } catch (error) {
      return {
        status: 'Error',
        error,
        data: null,
      };
    }
  }
}
