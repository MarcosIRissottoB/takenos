import { Test, TestingModule } from '@nestjs/testing';
import { CryptocurrenciesService } from './cryptocurrencies.service';
import { HttpCustomService } from '../../providers/http/http.service';
import { ExchangesService } from './exchanges.service';
import { ConfigModule } from '@nestjs/config';
import { ProvidersModule } from '../../providers/providers.module';
import { CryptocurrencyResponseMock } from '../mocks/cryptocurrencyResponseMock.service';
import { CryptoYaTiendaCryptoUSDTPriceInfoResponseMock } from '../mocks/exchangeResponseMock.service';

describe('CryptocurrenciesService', () => {
  let cryptocurrenciesService: CryptocurrenciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, ProvidersModule],
      providers: [
        CryptocurrenciesService,
        CryptocurrencyResponseMock,
        CryptoYaTiendaCryptoUSDTPriceInfoResponseMock,
        HttpCustomService,
        ExchangesService,
      ],
    }).compile();

    cryptocurrenciesService = module.get<CryptocurrenciesService>(
      CryptocurrenciesService,
    );
  });

  it('should be defined', () => {
    expect(cryptocurrenciesService).toBeDefined();
  });
});
