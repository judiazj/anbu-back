import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ShinobiDocument = HydratedDocument<Shinobi>;

@Schema({ timestamps: false, versionKey: false })
export class Shinobi {
  @Prop({ required: true, unique: true })
  alias: string;

  @Prop({ required: true, default: new Date() })
  fecha_ingreso: Date;

  @Prop({ required: true })
  password: string;

  @Prop()
  img?: string;

  @Prop({ required: true, default: "cazador", enum: ["cazador", "hokage"] })
  rango: string;

  @Prop({ required: true, default: "disponible", enum: ["ocupado", "refuerzo", "disponible"] })
  estado: string;
}

export const ShinobiSchema = SchemaFactory.createForClass(Shinobi);
