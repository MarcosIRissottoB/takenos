import { Module } from '@nestjs/common';
import { CryptocurrenciesController } from './cryptocurrencies.controller';
import { CryptocurrenciesService } from './cryptocurrencies.service';
import { CryptocurrencyResponseMock } from './mocks/cryptocurrencyResponseMock.service';

@Module({
  controllers: [CryptocurrenciesController],
  providers: [CryptocurrenciesService, CryptocurrencyResponseMock],
})
export class CryptocurrenciesModule {}
