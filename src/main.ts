import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.setGlobalPrefix(`/${configService.get('VERSION')}/api`);
  await app.listen(configService.get<number>('PORT') || 3001);
}
bootstrap();
