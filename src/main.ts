import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RootModule } from '@modules/root/root.module';
import { HttpExceptionFilter } from '@modules/error/http-exception.filter';
import { ApiErrorFilter } from '@modules/error/api-error.filter';

export const bootstrap = async () => {
  const app = await NestFactory.create(RootModule, {
    cors: true,
  });

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalFilters(new ApiErrorFilter());

  const config = new DocumentBuilder()
    .setTitle('Creative AI')
    .setVersion('1.0')
    .addServer(process.env.PUBLIC_URL as string)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(
    '/docs',
    app,
    { ...document, openapi: '3.1.0' },
    { yamlDocumentUrl: 'schema.yaml' },
  );

  await app.listen(process.env.PORT as string);
};

bootstrap();