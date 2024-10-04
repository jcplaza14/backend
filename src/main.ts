import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidacionPipe } from './common/validacion .pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidacionPipe());
  await app.listen(3000);
}
bootstrap();
