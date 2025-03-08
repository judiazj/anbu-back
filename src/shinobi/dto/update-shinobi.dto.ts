import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty, OmitType } from '@nestjs/swagger';

import { CreateShinobiDto } from './create-shinobi.dto';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

const baseUpdateDto = OmitType(CreateShinobiDto, ['password', 'alias'] as const);

export class UpdateShinobiDto extends PartialType(baseUpdateDto) {
  @ApiProperty()
  @IsOptional()
  img?: string;

  @ApiProperty()
  @IsEnum(["ocupado", "refuerzo", "disponible"], { message: "El estado debe ser ocupado, refuerzo o disponible" })
  @IsNotEmpty()
  @IsOptional()
  estado: string;
}
