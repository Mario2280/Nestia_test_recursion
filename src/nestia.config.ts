import { INestiaConfig } from '@nestia/sdk';
import { NestFactory } from '@nestjs/core';
// import { FastifyAdaptor } from "@nestjs/platform-fastify";

import { AppModule } from './app.module';

const NESTIA_CONFIG: INestiaConfig = {
  input: async () => {
    const app = await NestFactory.create(AppModule);
    // const app = await NestFactory.create(YourModule, new FastifyAdaptor());
    // app.setGlobalPrefix("api");
    // app.enableVersioning({
    //     type: VersioningType.URI,
    //     prefix: "v",
    // })
    return app;
  },
  swagger: {
    output: './swagger.json',
    beautify: true,
    servers: [
      {
        url: 'http://localhost:3456',
        description: 'Local Server',
      },
    ],
  },
  output: './out',
  distribute: './distribute',
  e2e: './e2e',
};
export default NESTIA_CONFIG;
