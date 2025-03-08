import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) { }


  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    }
  })
  @UseInterceptors(FileInterceptor('file', {
    limits: {
      fileSize: 1024 * 1024 * 5,
    },
    fileFilter: (req, file, callback) => {
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return callback(new Error('Solo se permiten imágenes!'), false);
      }
      callback(null, true);
    },
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {

    if (!file) {
      throw new Error('No se ha subido ningún archivo');
    }

    return this.filesService.uploadFile(file);
  }
}
