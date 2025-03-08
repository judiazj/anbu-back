import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
    PORT: number;
    MONGO_CNN: string;
    JWT_SECRET: string;
    ORIGIN_URL1: string;
    ORIGIN_URL2?: string;
    CLOUDINARY_CLOUD_NAME: string;
    CLOUDINARY_API_KEY: string;
    CLOUDINARY_API_SECRET: string;
}

const envsSchema = joi.object({
    PORT: joi.number().required(),
    MONGO_CNN: joi.string().required(),
    JWT_SECRET: joi.string().required(),
    ORIGIN_URL1: joi.string().required(),
    ORIGIN_URL2: joi.string().allow('').optional(),
    CLOUDINARY_CLOUD_NAME: joi.string().allow('').optional(),
    CLOUDINARY_API_KEY: joi.string().allow('').optional(),
    CLOUDINARY_API_SECRET: joi.string().allow('').optional(),
})
    .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`)
}

const envVars: EnvVars = value;

export const envs = {
    port: envVars.PORT,
    mongoUri: envVars.MONGO_CNN,
    jwtSecret: envVars.JWT_SECRET,
    originUrl1: envVars.ORIGIN_URL1,
    originUrl2: envVars.ORIGIN_URL2,
    cloudinaryCloudName: envVars.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: envVars.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: envVars.CLOUDINARY_API_SECRET,
}

