import { Module } from '@nestjs/common';
import { CryptocurrenciesController } from './cryptocurrencies.controller';
import { CryptocurrenciesService } from './cryptocurrencies.service';
import { CryptocurrencyResponseMock } from './mocks/cryptocurrencyResponseMock.service';
import { ConfigModule } from '@nestjs/config';
import { HttpCustomService } from 'src/providers/http/http.service';
import { ProvidersModule } from 'src/providers/providers.module';

@Module({
  imports: [ConfigModule, ProvidersModule],
  controllers: [CryptocurrenciesController],
  providers: [
    CryptocurrenciesService,
    CryptocurrencyResponseMock,
    HttpCustomService,
  ],
})
export class CryptocurrenciesModule {}
