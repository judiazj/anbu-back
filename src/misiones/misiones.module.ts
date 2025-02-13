import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MisionesService } from './misiones.service';
import { MisionesController } from './misiones.controller';
import { Mision, MisionSchema } from './schemas/mision.schema';
import { ShinobiModule } from '../shinobi/shinobi.module';

@Module({
  controllers: [MisionesController],
  providers: [MisionesService],
  imports: [
    ShinobiModule,
    MongooseModule.forFeature([{ name: Mision.name, schema: MisionSchema }]),
  ],
})
export class MisionesModule { }
