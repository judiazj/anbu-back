import { Module } from '@nestjs/common';
import { ShinobiService } from './shinobi.service';
import { ShinobiController } from './shinobi.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Shinobi, ShinobiSchema } from './schemas/shinobi.schema';

@Module({
  controllers: [ShinobiController],
  providers: [ShinobiService],
  imports: [MongooseModule.forFeature([{ name: Shinobi.name, schema: ShinobiSchema }])],
  exports: [ShinobiService],
})
export class ShinobiModule { }
