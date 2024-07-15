import { Expose } from 'class-transformer';
import { CryptoCurrency } from '../interfaces/cryptoCurrency.interface';

export class GetCryptocurrencyResponseDto {
  @Expose()
  statusCode: number;

  @Expose()
  message: string;

  @Expose()
  data?: CryptoCurrency | null;
}
