import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';


export type NotificacionDocument = HydratedDocument<Notificacion>;

@Schema({ timestamps: false, versionKey: false })
export class Notificacion {
  _id: Types.ObjectId;

  @Prop({ required: true, enum: ['grave', 'advertencia'] })
  tipo_notificacion: string;

  @Prop({ default: new Date() })
  fecha_emision: Date;

  @Prop({ required: true, ref: 'Mision' })
  id_mision: Types.ObjectId;

}

export const NotificacionSchema = SchemaFactory.createForClass(Notificacion);