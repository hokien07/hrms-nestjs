/* eslint-disable */

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../models/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel : typeof User) {}

  async findAll() : Promise<User[]> {
    return this.userModel.findAll();
  }

  async finById(id: string) : Promise<User | null> {
    return this.userModel.findOne({where: {id}});
  }

  async remove (id: string) : Promise<void> {
    const user = await this.finById(id);
    if(user) {
      await user.destroy();
    }
  }
  async findByEmail(email: string): Promise<User | null> {
    const user =  this.userModel.findOne({where:{ email: email }});
    return user;
  }
}
