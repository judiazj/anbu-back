import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateMisionDto } from './dto/create-mision.dto';
import { UpdateMisionDto } from './dto/update-mision.dto';
import { Mision } from './schemas/mision.schema';
import { ShinobiService } from '../shinobi/shinobi.service';

@Injectable()
export class MisionesService {

  constructor(
    @InjectModel(Mision.name) private readonly misionModel: Model<Mision>,
    private readonly shinobiService: ShinobiService,
  ) { }

  async create(createMisionDto: CreateMisionDto) {
    const shinobi = await this.shinobiService.findOne(createMisionDto.id_hokage);

    if (!shinobi || shinobi.rango !== 'hokage') throw new NotFoundException('El id_hokage no pertenece a un Hokage');
    return await this.misionModel.create(createMisionDto);
  }

  async findAll() {
    const misiones = await this.misionModel.find<Mision[]>();

    if (misiones.length === 0) throw new BadRequestException('No hay misiones registradas');

    return misiones;
  }

  async findOne(id: string) {
    const mision = await this.misionModel.findById<Mision>(id);

    if (!mision) throw new NotFoundException('Mision no encontrada');

    return mision;
  }

  async update(id: string, updateMisionDto: UpdateMisionDto) {

    if (updateMisionDto.id_cazador !== undefined) {
      const shinobi = await this.shinobiService.findOne(updateMisionDto.id_cazador);

      if (!shinobi || shinobi.rango !== 'cazador') throw new BadRequestException('El id_cazador no pertenece a un Cazador');
    }

    const mision = await this.misionModel.findByIdAndUpdate(id, updateMisionDto, { new: true });

    if (!mision) throw new NotFoundException('Mision no encontrada');

    return mision;
  }

  async remove(id: string) {
    return `This action removes a ${id} mision`;
  }
}
