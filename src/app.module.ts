import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CryptocurrenciesModule } from './cryptocurrencies/cryptocurrencies.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
      load: [configuration],
    }),
    CryptocurrenciesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
