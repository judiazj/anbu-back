// src/common/pipes/mongo-id.pipe.ts
import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class MongoIdPipe implements PipeTransform {
  transform(value: string) {
    if (!isValidObjectId(value)) {
      throw new BadRequestException(`${value} no es un MongoID válido`);
    }
    return value;
  }
}