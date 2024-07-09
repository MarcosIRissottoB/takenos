import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CryptocurrenciesModule } from './cryptocurrencies/cryptocurrencies.module';

@Module({
  imports: [ConfigModule.forRoot(), CryptocurrenciesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
