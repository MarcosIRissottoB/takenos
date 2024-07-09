import { IsString, IsNotEmpty } from 'class-validator';

export class GetCryptocurrencyDto {
  @IsString()
  @IsNotEmpty()
  symbol: string;
}
