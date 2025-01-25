import { IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateShinobiDto {
    @IsString()
    @IsNotEmpty()
    alias: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsUrl()
    @IsOptional()
    img?: string;
}
