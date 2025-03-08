import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ShinobiModule } from './shinobi/shinobi.module';
import { envs } from './config';
import { AuthModule } from './auth/auth.module';
import { MisionesModule } from './misiones/misiones.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [ShinobiModule, MongooseModule.forRoot(envs.mongoUri), AuthModule, MisionesModule, NotificacionesModule, FilesModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
