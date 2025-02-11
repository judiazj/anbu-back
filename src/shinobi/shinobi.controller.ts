import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShinobiService } from './shinobi.service';
import { CreateShinobiDto } from './dto/create-shinobi.dto';
import { UpdateShinobiDto } from './dto/update-shinobi.dto';

@Controller('shinobi')
export class ShinobiController {
  constructor(private readonly shinobiService: ShinobiService) { }

  @Post()
  create(@Body() createShinobiDto: CreateShinobiDto) {
    return this.shinobiService.create(createShinobiDto);
  }

  @Get()
  findAll() {
    return this.shinobiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shinobiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShinobiDto: UpdateShinobiDto) {
    return this.shinobiService.update(+id, updateShinobiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shinobiService.remove(+id);
  }
}
