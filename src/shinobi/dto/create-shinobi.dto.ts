import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateShinobiDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    alias: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsUrl()
    @IsOptional()
    img?: string;
}
