import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000, '0.0.0.0'); // ⬅ Ubah ini dari default ke '0.0.0.0'
}
bootstrap();
