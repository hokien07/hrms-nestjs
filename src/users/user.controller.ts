/* eslint-disable */

import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UserController {
    constructor(private readonly service: UsersService) {}
}
