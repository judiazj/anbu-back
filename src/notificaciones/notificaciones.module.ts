import { Module } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';
import { NotificacionesController } from './notificaciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Notificacion, NotificacionSchema } from './schemas/notificacion.schema';

@Module({
  controllers: [NotificacionesController],
  providers: [NotificacionesService],
  imports: [
    MongooseModule.forFeature([{ name: Notificacion.name, schema: NotificacionSchema }]),
  ]
})
export class NotificacionesModule { }
