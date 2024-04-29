import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from './users.model';
import { UsersService } from '../users.service';
import {
  userByArgs,
  userCreateInput,
  userDeleteInput,
  userUpdateInput,
} from './users.args';
import { UseGuards } from '@nestjs/common';
import { LoginAuthGuard } from 'src/_libs/loginauth.guard';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UsersService) {}
  @Query(() => [UserModel])
  async getUsers() {
    return await this.userService.getUsers();
  }
  @Mutation(() => UserModel)
  async createUser(@Args('input') args: userCreateInput) {
    return await this.userService.createUser(args);
  }

  @UseGuards(LoginAuthGuard)
  @Query(() => UserModel)
  async getByUser(@Args('input') args: userByArgs) {
    return await this.userService.getByUser(args);
  }
  @UseGuards(LoginAuthGuard)
  @Mutation(() => UserModel)
  async updateUser(@Args('input') args: userUpdateInput) {
    return await this.userService.updateUser(args);
  }
  @UseGuards(LoginAuthGuard)
  @Mutation(() => UserModel)
  async deleteUser(@Args('input') args: userDeleteInput) {
    return await this.userService.deleteUser(args);
  }
}
