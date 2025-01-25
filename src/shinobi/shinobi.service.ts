import { Injectable } from '@nestjs/common';
import { CreateShinobiDto } from './dto/create-shinobi.dto';
import { UpdateShinobiDto } from './dto/update-shinobi.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Shinobi, ShinobiDocument } from './schemas/shinobi.schema';
import { Model } from 'mongoose';

@Injectable()
export class ShinobiService {

  constructor( 
    @InjectModel(Shinobi.name) private readonly shinobiModel: Model<ShinobiDocument>
    
  ) {}

  async create(createShinobiDto: CreateShinobiDto) {
    const newShinobi: Shinobi = await this.shinobiModel.create(createShinobiDto);
    return newShinobi;
  }

  findAll() {
    return `This action returns all shinobi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shinobi`;
  }

  update(id: number, updateShinobiDto: UpdateShinobiDto) {
    return `This action updates a #${id} shinobi`;
  }

  remove(id: number) {
    return `This action removes a #${id} shinobi`;
  }
}
