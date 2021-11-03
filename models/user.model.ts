import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column(DataType.TEXT)
  name: string;
}
