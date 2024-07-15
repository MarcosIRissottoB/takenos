import { Test, TestingModule } from '@nestjs/testing';
import { CryptocurrenciesController } from './cryptocurrencies.controller';
import { CryptocurrenciesService } from './services/cryptocurrencies.service';
import { getTopCryptocurrenciesMock } from './mocks/getCryptocurrenciesMock';
import { CryptocurrencyResponseMock } from './mocks/cryptocurrencyResponseMock.service';
import { CryptoYaTiendaCryptoUSDTPriceInfoResponseMock } from './mocks/exchangeResponseMock.service';
import { HttpCustomService } from '../providers/http/http.service';
import { ExchangesService } from './services/exchanges.service';
import { ConfigModule } from '@nestjs/config';
import { ProvidersModule } from '../providers/providers.module';

describe('CryptocurrenciesController', () => {
  let cryptocurrenciesController: CryptocurrenciesController;
  let cryptocurrenciesService: CryptocurrenciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, ProvidersModule],
      controllers: [CryptocurrenciesController],
      providers: [
        CryptocurrenciesService,
        CryptocurrencyResponseMock,
        CryptoYaTiendaCryptoUSDTPriceInfoResponseMock,
        HttpCustomService,
        ExchangesService,
      ],
    }).compile();

    cryptocurrenciesController = module.get<CryptocurrenciesController>(
      CryptocurrenciesController,
    );
    cryptocurrenciesService = module.get<CryptocurrenciesService>(
      CryptocurrenciesService,
    );
  });

  it('should be defined', () => {
    expect(cryptocurrenciesController).toBeDefined();
  });

  describe('getTopCryptocurrencies', () => {
    it('should return an array of Cryptocurrencies', async () => {
      const result = getTopCryptocurrenciesMock;
      jest
        .spyOn(cryptocurrenciesService, 'getTopCryptocurrencies')
        .mockImplementation(
          () =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve(result);
              }, 300);
            }),
        );

      expect(await cryptocurrenciesController.getTopCryptocurrencies()).toBe(
        result,
      );
    });
  });
});
