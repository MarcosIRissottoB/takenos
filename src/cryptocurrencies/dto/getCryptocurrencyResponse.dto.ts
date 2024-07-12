import { Expose } from 'class-transformer';
import { CryptoCurrency } from '../interfaces/cryptoCurrency.interface';

export class GetCryptocurrencyResponseDto {
  @Expose()
  status: string;

  @Expose()
  error: object | null;

  @Expose()
  data: CryptoCurrency | null;
}
