import { Module } from '@nestjs/common';
import { ShinobiModule } from './shinobi/shinobi.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ShinobiModule, MongooseModule.forRoot('')],
  controllers: [],
  providers: [],
})
export class AppModule { }
