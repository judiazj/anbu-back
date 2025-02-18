import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
    PORT: number;
    MONGO_CNN: string;
    JWT_SECRET: string;
}

const envsSchema = joi.object({
    PORT: joi.number().required(),
    MONGO_CNN: joi.string().required(),
    JWT_SECRET: joi.string().required(),
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
}

