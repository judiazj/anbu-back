import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { MisionesService } from './misiones.service';
import { CreateMisionDto } from './dto/create-mision.dto';
import { UpdateMisionDto } from './dto/update-mision.dto';
import { MongoIdPipe } from '../common/pipes/mongo-id.pipe';

@Controller('misiones')
export class MisionesController {
  constructor(private readonly misionesService: MisionesService) { }

  @Post()
  create(@Body() createMisionDto: CreateMisionDto) {
    return this.misionesService.create(createMisionDto);
  }

  @Get()
  findAll() {
    return this.misionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.misionesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', MongoIdPipe) id: string, @Body() updateMisionDto: UpdateMisionDto) {
    return this.misionesService.update(id, updateMisionDto);
  }

  @Delete(':id')
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.misionesService.remove(id);
  }
}
