import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsMongoId, IsNotEmpty } from "class-validator";
import { Types } from "mongoose";


export class CreateNotificacionDto {

  @ApiProperty()
  @IsEnum(['grave', 'advertencia'])
  @IsNotEmpty()
  tipo_notificacion: string;

  @ApiProperty()
  @IsMongoId()
  @IsNotEmpty()
  id_mision: Types.ObjectId;
}
