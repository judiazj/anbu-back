import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateShinobiDto } from '../shinobi/dto/create-shinobi.dto';
import { ShinobiService } from '../shinobi/shinobi.service';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private readonly shinobiService: ShinobiService,
    private readonly jwtService: JwtService,
  ) { }

  async registerUser(createShinobiDto: CreateShinobiDto) {
    return await this.shinobiService.create(createShinobiDto);
  }

  async loginUser({ alias, password }: LoginUserDto) {
    const shinobi = await this.shinobiService.findShinobiByAlias(alias);

    if (!shinobi) throw new BadRequestException('Invalid credentials');

    if (shinobi.password !== password) throw new BadRequestException('Invalid credentials');

    const newShinobi = await this.shinobiService.changePassword(alias);
    const payload = { alias: shinobi.alias, password: newShinobi.password };

    return {
      access_token: await this.jwtService.signAsync(payload)
    }
  }
}
