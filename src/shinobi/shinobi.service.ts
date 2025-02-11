import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateShinobiDto } from './dto/create-shinobi.dto';
import { UpdateShinobiDto } from './dto/update-shinobi.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Shinobi, ShinobiDocument } from './schemas/shinobi.schema';
import { Model } from 'mongoose';

@Injectable()
export class ShinobiService {

  constructor(
    @InjectModel(Shinobi.name) private readonly shinobiModel: Model<ShinobiDocument>

  ) { }

  async create(createShinobiDto: CreateShinobiDto) {
    const newShinobi = await this.shinobiModel.create(createShinobiDto);
    return newShinobi;
  }

  async findAll() {
    const shinobis = await this.shinobiModel.find<Shinobi[]>();

    if (shinobis.length === 0) throw new NotFoundException('No shinobis found');

    return shinobis;
  }

  async findOne(id: string) {
    const shinobi = await this.shinobiModel.findById<Shinobi>(id);

    if (!shinobi) throw new NotFoundException(`Shinobi with id ${id} not found`);

    return shinobi;
  }

  async update(id: string, updateShinobiDto: UpdateShinobiDto) {
    const updatedShinobi = await this.shinobiModel.findByIdAndUpdate<Shinobi>(id, updateShinobiDto, { new: true });

    if (!updatedShinobi) throw new NotFoundException(`Shinobi with id ${id} not found`);

    return updatedShinobi;
  }

  async remove(id: string) {
    return `This action removes a #${id} shinobi`;
  }
}
