import { Injectable } from '@nestjs/common';
import { CryptoYaCryptoCurrencyPrice } from '../interfaces/cryptoYaCryptoCurrencyPriceInfo.interface';

@Injectable()
export class CryptoYaTiendaCryptoUSDTPriceInfoResponseMock {
  private cryptoYaTiendaCryptoUSDTPriceInfoResponseMock = {
    ask: 1440,
    totalAsk: 1440,
    bid: 1420,
    totalBid: 1420,
    time: 1720793030,
  };

  async fetchAskMock(): Promise<CryptoYaCryptoCurrencyPrice> {
    return this.cryptoYaTiendaCryptoUSDTPriceInfoResponseMock;
  }
}
