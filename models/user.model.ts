/* eslint-disable */
import { IsEmail, IsNotEmpty } from 'class-validator';
import {
  Table,
  Column,
  DataType,
  Model,
  CreatedAt,
  UpdatedAt } from 'sequelize-typescript';

export const UserN = 'Not a model';
export const NUser = 'Not a model';

@Table
export class User extends Model {

  @Column({primaryKey: true})
  id: number

  @Column(DataType.TEXT)
  @IsNotEmpty()
  name: string;

  @Column(DataType.TEXT)
  @IsEmail()
  email: string;

  @Column(DataType.TEXT)
  @IsNotEmpty()
  password: string;

  @Column(DataType.TEXT)
  remember_token: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
