import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { Types } from 'mongoose';

import { CreateMisionDto } from './create-mision.dto';
import { IsEnum, IsMongoId, IsOptional } from 'class-validator';
import { Estado } from '../enums/mision.enum';

const CreateMisionDtoWithoutHokageId = OmitType(CreateMisionDto, ['id_hokage'] as const);

export class UpdateMisionDto extends PartialType(CreateMisionDtoWithoutHokageId) {

  @ApiProperty()
  titulo: string;

  @ApiProperty()
  descripcion: string;

  @ApiProperty()
  rango: string;

  @ApiProperty()
  @IsEnum(Estado)
  @IsOptional()
  estado: string;

  @ApiProperty()
  @IsMongoId()
  @IsOptional()
  id_cazador: Types.ObjectId;

}
