import { Module } from '@nestjs/common';
import { DashboardModule } from './dashboards/dashboard.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [DashboardModule, EmployeesModule],
})
export class AppModule {}
