import { Controller, Get, Param } from '@nestjs/common';
import { CryptocurrenciesService } from './cryptocurrencies.service';
import { GetCryptocurrenciesResponseDto } from './dto/getCryptocurrenciesResponse.dto';
import { GetCryptocurrencyDto } from './dto/getCryptocurrencyRequest.dto';
import { GetCryptocurrencyResponseDto } from './dto/getCryptocurrencyResponse.dto';

@Controller('cryptocurrencies')
export class CryptocurrenciesController {
  constructor(
    private readonly cryptocurrenciesService: CryptocurrenciesService,
  ) {}
  @Get()
  getTopCryptocurrencies(): Promise<GetCryptocurrenciesResponseDto> {
    return this.cryptocurrenciesService.getTopCryptocurrencies();
  }

  @Get('/:symbol')
  getCryptocurrency(
    @Param() { symbol }: GetCryptocurrencyDto,
  ): Promise<GetCryptocurrencyResponseDto> {
    return this.cryptocurrenciesService.getCryptocurrency(symbol);
  }
}
