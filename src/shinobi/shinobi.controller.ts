import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShinobiService } from './shinobi.service';
import { UpdateShinobiDto } from './dto/update-shinobi.dto';
import { MongoIdPipe } from 'src/common/pipes/mongo-id.pipe';
import { Types } from 'mongoose';

@Controller('shinobis')
export class ShinobiController {
  constructor(private readonly shinobiService: ShinobiService) { }

  @Get()
  async findAll() {
    return await this.shinobiService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', MongoIdPipe) id: Types.ObjectId) {
    return await this.shinobiService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', MongoIdPipe) id: string, @Body() updateShinobiDto: UpdateShinobiDto) {
    return await this.shinobiService.update(id, updateShinobiDto);
  }

  @Delete(':id')
  async remove(@Param('id', MongoIdPipe) id: string) {
    return await this.shinobiService.remove(id);
  }
}
