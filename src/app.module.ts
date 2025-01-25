import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ShinobiModule } from './shinobi/shinobi.module';
import { envs } from './config';

@Module({
  imports: [ShinobiModule, MongooseModule.forRoot(envs.mongoUri)],
  controllers: [],
  providers: [],
})
export class AppModule { }
