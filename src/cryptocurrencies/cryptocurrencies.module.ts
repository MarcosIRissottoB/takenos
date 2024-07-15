import { Module } from '@nestjs/common';
import { CryptocurrenciesController } from './cryptocurrencies.controller';
import { CryptocurrenciesService } from './services/cryptocurrencies.service';
import { CryptocurrencyResponseMock } from './mocks/cryptocurrencyResponseMock.service';
import { ConfigModule } from '@nestjs/config';
import { HttpCustomService } from '../providers/http/http.service';
import { ProvidersModule } from '../providers/providers.module';
import { ExchangesService } from './services/exchanges.service';
import { CryptoYaTiendaCryptoUSDTPriceInfoResponseMock } from './mocks/exchangeResponseMock.service';

@Module({
  imports: [ConfigModule, ProvidersModule],
  controllers: [CryptocurrenciesController],
  providers: [
    CryptocurrenciesService,
    CryptocurrencyResponseMock,
    CryptoYaTiendaCryptoUSDTPriceInfoResponseMock,
    HttpCustomService,
    ExchangesService,
  ],
})
export class CryptocurrenciesModule {}
