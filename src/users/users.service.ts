import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/_libs/prisma.client';
import {
  userByArgs,
  userCreateInput,
  userDeleteInput,
  userUpdateInput,
} from './models/users.args';

@Injectable()
export class UsersService {
  constructor(private readonly db: PrismaService) {}
  async getUsers() {
    return await this.db.users.findMany();
  }
  async getByUser(args: userByArgs) {
    return await this.db.users.findFirst({
      where: { id: args.id },
    });
  }
  async createUser(args: userCreateInput) {
    return await this.db.users.create({
      data: args,
    });
  }
  async updateUser(args: userUpdateInput) {
    return await this.db.users.update({
      where: { email: args.email },
      data: { name: args.name, introduction: args.introduction },
    });
  }
  async deleteUser(args: userDeleteInput) {
    return await this.db.users.delete({
      where: { email: args.email, password: args.password },
    });
  }
}
