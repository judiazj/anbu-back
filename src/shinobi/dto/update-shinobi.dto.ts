import { PartialType } from '@nestjs/mapped-types';
import { CreateShinobiDto } from './create-shinobi.dto';

export class UpdateShinobiDto extends PartialType(CreateShinobiDto) {}
