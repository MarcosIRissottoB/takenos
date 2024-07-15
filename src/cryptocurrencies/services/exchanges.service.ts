import { Injectable } from '@nestjs/common';
// import { CryptoYaTiendaCryptoUSDTPriceInfoResponseMock } from '../mocks/exchangeResponseMock.service';
import { ConfigService } from '@nestjs/config';
import { CryptoYaCryptoCurrencyPrice } from '../interfaces/cryptoYaCryptoCurrencyPriceInfo.interface';
import { HttpCustomService } from 'src/providers/http/http.service';

@Injectable()
export class ExchangesService {
  constructor(
    // private readonly cryptoYaTiendaCryptoUSDTPriceInfoResponseMock: CryptoYaTiendaCryptoUSDTPriceInfoResponseMock,
    private readonly configService: ConfigService,
    private readonly httpCustomService: HttpCustomService,
  ) {}

  async fetchCryptocurrencyPriceInfo({
    exchange,
    coin,
    fiat,
  }): Promise<CryptoYaCryptoCurrencyPrice> {
    try {
      const CRYPTOYA_BASE_URL =
        this.configService.get<string>('CRYPTOYA_BASE_URL');
      const response = await this.httpCustomService.apiFindAll(
        `${CRYPTOYA_BASE_URL}/${exchange}/${coin}/${fiat}`,
      );
      return response;

      // // // Mocked response for testing purposes
      // const response =
      //   await this.cryptoYaTiendaCryptoUSDTPriceInfoResponseMock.fetchAskMock();
      // return response;
    } catch (error) {
      console.error('Error fetching fetchCryptocurrencyPriceInfo', error);
      throw error;
    }
  }
}
