import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { CreateNotificacionDto } from './dto/create-notificacion.dto';
import { UpdateNotificacionDto } from './dto/update-notificacion.dto';

@Injectable()
export class NotificacionesService {

  constructor(
    @InjectModel(Notification.name) private readonly notificationModel: Model<Notification>
  ) { }

  async create(createNotificacionDto: CreateNotificacionDto) {
    return await this.notificationModel.create(createNotificacionDto);
  }

  async findAll() {
    const notifications = await this.notificationModel.find<Notification>();

    if (notifications.length === 0) throw new NotFoundException('No hay notificaciones');

    return notifications;
  }

  async findOne(id: Types.ObjectId) {
    const notification = await this.notificationModel.findById(id);

    if (!notification) throw new NotFoundException('Notificación no encontrada');

    return notification;
  }

  async update(id: Types.ObjectId, updateNotificacionDto: UpdateNotificacionDto) {
    const notification = await this.findOne(id);

    notification.set(updateNotificacionDto);

    return await notification.save();
  }

  async remove(id: Types.ObjectId) {
    return `This action removes a #${id} notificacione`;
  }
}
