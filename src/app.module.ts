import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';

import { SequelizeModule } from '@nestjs/sequelize';

import { DashboardModule } from './dashboards/dashboard.module';
import { EmployeesModule } from './employees/employees.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ThrottlerModule } from '@nestjs/throttler';

import { AppController } from './app.controller';
import { CaslModule } from './casl/casl.module';

import { User } from '../models/user.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
      load: [configuration],
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT) || 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      models: [User],
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    DashboardModule,
    EmployeesModule,
    AuthModule,
    UsersModule,
    CaslModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
