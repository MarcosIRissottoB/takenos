import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CryptocurrenciesModule } from './cryptocurrencies/cryptocurrencies.module';
import { UploadfileModule } from './uploadfile/uploadfile.module';
import configuration from './config/configuration';
import { HttpCustomService } from './providers/http/http.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
      load: [configuration],
    }),
    CryptocurrenciesModule,
    UploadfileModule,
  ],
  controllers: [],
  providers: [HttpCustomService],
})
export class AppModule {}
