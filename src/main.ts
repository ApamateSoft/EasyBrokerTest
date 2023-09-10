import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('EasyBroker Test')
    .setDescription(
      'Este es un proyecto creado en nest.js con la finalidad consumir la api de properties de EasyBrok en su entorno de pruebas',
    )
    .setVersion('1.0')
    .addTag('EasyBroker')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
