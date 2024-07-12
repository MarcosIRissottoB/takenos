import { Expose } from 'class-transformer';
import { CryptoCurrency } from '../interfaces/CryptoCurrency.interface';

export class GetCryptocurrenciesResponseDto {
  @Expose()
  status: string;

  @Expose()
  error: object | null;

  @Expose()
  data: CryptoCurrency[] | null;
}
