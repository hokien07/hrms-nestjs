import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller()
export class DashboardController {
  constructor(private readonly service: DashboardService) {}

  @Get()
  getHello(): string {
    return this.service.getHello();
  }
}
