import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);
  // Añade las validaciones de forma global
  app.useGlobalPipes(
    new ValidationPipe({
      // Solo admite la data necesaria segun el dto
      whitelist: true,
      // Brinda un error en caso se brinde data demas
      forbidNonWhitelisted: true
    })
  )
  await app.listen(3000);
}
main();
