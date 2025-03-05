import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';
import { CreateNotificacionDto } from './dto/create-notificacion.dto';
import { UpdateNotificacionDto } from './dto/update-notificacion.dto';
import { MongoIdPipe } from '../common/pipes/mongo-id.pipe';
import { Types } from 'mongoose';

@Controller('notificaciones')
export class NotificacionesController {
  constructor(private readonly notificacionesService: NotificacionesService) { }

  @Post()
  async create(@Body() createNotificacionDto: CreateNotificacionDto) {
    return await this.notificacionesService.create(createNotificacionDto);
  }

  @Get()
  async findAll() {
    return await this.notificacionesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', MongoIdPipe) id: Types.ObjectId) {
    return await this.notificacionesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', MongoIdPipe) id: Types.ObjectId, @Body() updateNotificacionDto: UpdateNotificacionDto) {
    return await this.notificacionesService.update(id, updateNotificacionDto);
  }

  @Delete(':id')
  async remove(@Param('id', MongoIdPipe) id: Types.ObjectId) {
    return await this.notificacionesService.remove(id);
  }
}
