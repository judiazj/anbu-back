import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ShinobiModule } from '../shinobi/shinobi.module';
// import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { envs } from '../config';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ShinobiModule,
    JwtModule.register({
      secret: envs.jwtSecret,
      signOptions: { expiresIn: '1d' }
    })
  ],
  // exports: [AuthService, JwtAuthGuard]
})
export class AuthModule { }
