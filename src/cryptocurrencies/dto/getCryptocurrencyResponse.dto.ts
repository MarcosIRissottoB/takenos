import { Expose } from 'class-transformer';
import { Cryptocurrency } from '../cryptocurrency.entity';

export class GetCryptocurrencyResponseDto {
  @Expose()
  status: string;

  @Expose()
  error: object | null;

  @Expose()
  data: Cryptocurrency;
}
