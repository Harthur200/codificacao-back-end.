import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlunosModule } from './alunos/alunos.module.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import type  {ConfigType}  from '@nestjs/config';
import joi from 'joi';
import  databaseConfig  from './config/database.config.js'
import authConfig from './config/auth.config.js';


@Module({
  imports: [
    AlunosModule,
  ConfigModule.forRoot({
    isGlobal: true,
    load:[databaseConfig, authConfig],
    validationSchema: joi.object({
      NODE_ENV: joi.string()
      .valid('development','production','test')
      .default('development'),
    PORT: joi.number(). default(3000),
    DATABASE_URI: joi.string().required(),
    JWT_SECRET: joi.string().required(),
    }),
  }),
  MongooseModule.forRootAsync({
    imports:[ConfigModule],
    useFactory:(dbConfig: ConfigType<typeof databaseConfig>) => ({
      uri:dbConfig.uri,
      maxPoolSize: dbConfig.maxPoolSize,
    }),
    inject:[databaseConfig.KEY],
  }),
  ],
  controllers:[],
  providers:[],
})
export class AppModule {}
