import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('user')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Get()
  getHello(): string {
    return this.service.getHello();
  }
}
