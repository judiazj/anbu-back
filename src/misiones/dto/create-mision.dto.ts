import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';

import { Rango } from '../enums/mision.enum';

export class CreateMisionDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty()
  @IsEnum(Rango)
  @IsNotEmpty()
  rango: string;

  @ApiProperty()
  @IsMongoId()
  @IsNotEmpty()
  id_hokage: Types.ObjectId;
}
