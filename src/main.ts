import { NestFactory } from '@nestjs/core';
import { SampleModule } from './sample.module';

async function bootstrap() {
  const app = await NestFactory.create(SampleModule);

  app.enableCors({
    origin: '*',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  });

  await app.listen(8080);
}
bootstrap();
