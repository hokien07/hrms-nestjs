import {
  Controller,
  Request,
  Post,
  Get,
  UseGuards,
  Response,
  Render,
} from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { Public } from './auth/constants';

@Controller()
export class AppController {
  constructor(private service: AuthService) {}

  @Public()
  @Get('login')
  @Render('login')
  showLogin() {
    return { message: 'Hello world!' };
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.service.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
