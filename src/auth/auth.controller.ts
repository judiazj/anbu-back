import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { CreateShinobiDto } from '../shinobi/dto/create-shinobi.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  async registerUser(@Body() createShinobiDto: CreateShinobiDto) {
    return await this.authService.registerUser(createShinobiDto);
  }

  @Post('login')
  async loginUser(@Body() loginUserDto: LoginUserDto) {
    return await this.authService.loginUser(loginUserDto);
  }
}
