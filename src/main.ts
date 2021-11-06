import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import compression from 'fastify-compress';
import { sessionConfig } from '../config/session.config';
import secureSession from 'fastify-secure-session';
import { join } from 'path';

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  app.enableCors();
  app.use(helmet());
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  await app.register(secureSession, sessionConfig);
  await app.register(compression, { encodings: ['gzip', 'deflate'] });
  app.useStaticAssets({
    root: join(__dirname, '../..', 'public'),
    prefix: '/public/',
  });
  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'),
    },
    templates: join(__dirname, '../..', 'views'),
  });
  await app.listen(process.env.PORT || 3000);
}
main();
