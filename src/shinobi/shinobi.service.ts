import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateShinobiDto } from './dto/create-shinobi.dto';
import { UpdateShinobiDto } from './dto/update-shinobi.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Shinobi, ShinobiDocument } from './schemas/shinobi.schema';
import { Model, Types } from 'mongoose';

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

  async findOne(id: Types.ObjectId) {
    const shinobi = await this.shinobiModel.findById<Shinobi>(id);

    if (!shinobi) throw new NotFoundException(`Shinobi with id ${id} not found`);

    return shinobi;
  }

  async findShinobiByAlias(alias: string) {
    return await this.shinobiModel.findOne<Shinobi>({ alias });
  }

  async changePassword(alias: string) {
    const newPassword = crypto.randomUUID();

    const updatedShinobi = await this.shinobiModel.findOneAndUpdate<Shinobi>(
      { alias },
      { password: newPassword },
      { new: true }
    );

    return updatedShinobi;
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
