import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { expiresIn } from './constants';
import * as Hash from '../../common/encryption/hash';

@Injectable()
export class AuthService {
  constructor(private service: UsersService, private jwtService: JwtService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.service.findByEmail(email);
    // TODO:: Need to validate vs password.
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
      expiresIn: expiresIn,
    };
  }
}
