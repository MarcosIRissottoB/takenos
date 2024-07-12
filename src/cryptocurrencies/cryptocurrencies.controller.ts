import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CryptocurrenciesService } from './services/cryptocurrencies.service';
import { GetCryptocurrenciesResponseDto } from './dto/getCryptocurrenciesResponse.dto';
import { GetCryptocurrencyResponseDto } from './dto/getCryptocurrencyResponse.dto';

@ApiTags('Cryptocurrencies')
@Controller('cryptocurrencies')
export class CryptocurrenciesController {
  constructor(
    private readonly cryptocurrenciesService: CryptocurrenciesService,
  ) {}
  @Get()
  getTopCryptocurrencies(): Promise<GetCryptocurrenciesResponseDto> {
    return this.cryptocurrenciesService.getTopCryptocurrencies();
  }

  @Get(':id')
  getCryptocurrency(
    @Param('id') id: string,
  ): Promise<GetCryptocurrencyResponseDto> {
    return this.cryptocurrenciesService.getCryptocurrency(id);
  }
}
