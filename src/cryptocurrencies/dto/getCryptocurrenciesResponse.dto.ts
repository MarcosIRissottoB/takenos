import { Expose } from 'class-transformer';
import { CryptoCurrency } from '../interfaces/CryptoCurrency.interface';

export class GetCryptocurrenciesResponseDto {
  @Expose()
  statusCode: number;

  @Expose()
  message: string;

  @Expose()
  data?: CryptoCurrency[] | null;
}
