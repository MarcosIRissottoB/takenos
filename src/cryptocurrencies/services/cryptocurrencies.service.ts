import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpCustomService } from 'src/providers/http/http.service';
import { GetCryptocurrenciesResponseDto } from '../dto/getCryptocurrenciesResponse.dto';
import { GetCryptocurrencyResponseDto } from '../dto/getCryptocurrencyResponse.dto';
// import { CryptocurrencyResponseMock } from '../mocks/cryptocurrencyResponseMock.service';
import { ErrorManager } from 'src/utils/error.manager';
import { CoinMarketCapCryptoCurrencyInfo } from '../interfaces/coinMarketCapCryptoCurrencyInfo.interface';
import { ExchangesService } from './exchanges.service';
import { CryptoCurrency } from '../interfaces/CryptoCurrency.interface';

@Injectable()
export class CryptocurrenciesService {
  constructor(
    // private readonly cryptocurrencyResponseMock: CryptocurrencyResponseMock,
    private readonly configService: ConfigService,
    private readonly httpCustomService: HttpCustomService,
    private readonly exchangeService: ExchangesService,
  ) {}
  private async fetchCryptocurrencies(): Promise<
    CoinMarketCapCryptoCurrencyInfo[]
  > {
    try {
      const COINMARKETCAP_BASE_URL = this.configService.get<string>(
        'COINMARKETCAP_BASE_URL',
      );
      const COINMARKETCAP_API_KEY = this.configService.get<string>(
        'COINMARKETCAP_API_KEY',
      );
      const config = {
        headers: {
          'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY,
        },
      };
      const { data } = await this.httpCustomService.apiFindAll(
        COINMARKETCAP_BASE_URL,
        config,
      );
      return data;

      // // Mocked response for testing purposes
      // const response =
      //   await this.cryptocurrencyResponseMock.fetchCryptocurrenciesMock();
      // return response;
    } catch (error) {
      console.error('Error fetching cryptocurrencies', error);
      throw error;
    }
  }

  private createCryptoCurrencyObject(
    data: CoinMarketCapCryptoCurrencyInfo,
  ): CryptoCurrency {
    return {
      id: data.id,
      name: data.name,
      symbol: data.symbol,
      variationInLastDay: data.quote?.USD?.percent_change_24h.toFixed(2) || 0,
      fiatSelected: '',
      fiatPrice: null,
    };
  }

  private async integrateExhangeData(
    coin: CryptoCurrency,
  ): Promise<CryptoCurrency> {
    const exchangeAndCoinOptions = {
      exchange: 'tiendacrypto',
      fiat: 'ars',
    };
    const response = await this.exchangeService.fetchCryptocurrencyPriceInfo({
      exchange: exchangeAndCoinOptions.exchange,
      coin: coin.symbol.toLocaleLowerCase(),
      fiat: exchangeAndCoinOptions.fiat,
    });
    return {
      ...coin,
      fiatSelected: exchangeAndCoinOptions.fiat.toUpperCase(),
      fiatPrice: response.ask,
    };
  }

  private async integrateCrytoCurrenciesAndExhangeData(
    response: CoinMarketCapCryptoCurrencyInfo[],
  ): Promise<CryptoCurrency[]> {
    const cryptocurrenciesTop = response.slice(0, 5);
    const crytoCurrenciesData = cryptocurrenciesTop.map((item) =>
      this.createCryptoCurrencyObject(item),
    );
    const crytoCurrenciesDataWithExchangeData = async () => {
      const unresolvedPromises = crytoCurrenciesData.map((coin) =>
        this.fetchExchangeData(coin),
      );
      const results = await Promise.all(unresolvedPromises);
      return results;
    };
    return crytoCurrenciesDataWithExchangeData();
  }

  private async fetchExchangeData(coin): Promise<CryptoCurrency> {
    const response = await this.integrateExhangeData(coin);
    return response;
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
      const data = await this.integrateCrytoCurrenciesAndExhangeData(reponse);
      return {
        status: 'Success',
        error: null,
        data: data,
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
        (cryptocurrency: CoinMarketCapCryptoCurrencyInfo) =>
          cryptocurrency.symbol === symbol.toUpperCase(),
      )[0];
      if (!dataFiltered) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Symbol not found',
        });
      }
      const cryptoCurrency = this.createCryptoCurrencyObject(dataFiltered);
      const cryptoCurrencyWithExchangeData =
        await this.fetchExchangeData(cryptoCurrency);
      return {
        status: 'Success',
        error: null,
        data: cryptoCurrencyWithExchangeData,
      };
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
