import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

import { EstadoMision, Rango } from '../enums/mision.enum';

export type MisionDocument = HydratedDocument<Mision>;

@Schema({ timestamps: false, versionKey: false })
export class Mision {

  @Prop({ required: true })
  titulo: string;

  @Prop({ required: true })
  descripcion: string;

  @Prop({ ref: 'shinobi', type: Types.ObjectId })
  id_cazador?: string;

  @Prop({ default: Date.now() })
  fecha_inicio: Date;

  @Prop()
  fecha_fin?: Date;

  @Prop({ default: EstadoMision.EN_PROCESO, enum: EstadoMision })
  estado: string;

  @Prop({ enum: Rango })
  rango: string;

  @Prop({ ref: 'shinobi', type: Types.ObjectId })
  id_hokage?: string;
}

export const MisionSchema = SchemaFactory.createForClass(Mision);