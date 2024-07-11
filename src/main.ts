import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  const HOST = configService.get('host');
  const PORT = configService.get('port');
  console.log(`Visit: http://${HOST}:${PORT}/cryptocurrencies`);
  await app.listen(PORT);
}
bootstrap();
