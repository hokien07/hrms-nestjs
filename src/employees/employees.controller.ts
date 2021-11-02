import { Controller, Get } from '@nestjs/common';
import { EmployeesService } from './employees.service'

@Controller('employee')
export class EmployeesController {
  constructor(private readonly service: EmployeesService) {}

  @Get()
  getHello(): string {
    return this.service.getHello();
  }
}
