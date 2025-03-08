import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

import { envs } from 'src/config';
import { Readable } from 'stream';

@Injectable()
export class FilesService {

    constructor() {
        cloudinary.config({
            cloud_name: envs.cloudinaryCloudName,
            api_key: envs.cloudinaryApiKey,
            api_secret: envs.cloudinaryApiSecret,
        });
    }

    async uploadFile(file: Express.Multer.File): Promise<string> {
        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { resource_type: 'auto' },
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result.secure_url);
                    }
                },
            );

            const readableStream = new Readable();
            readableStream.push(file.buffer);
            readableStream.push(null);
            readableStream.pipe(uploadStream);
        });
    }
}
