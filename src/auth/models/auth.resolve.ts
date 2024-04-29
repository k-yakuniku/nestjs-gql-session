import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { LocalAuthGuard } from 'src/_libs/localauth.guard';
import { userCreateInput } from 'src/users/models/users.args';
import { UserModel } from 'src/users/models/users.model';

@Resolver()
export class AuthResolve {
  @UseGuards(LocalAuthGuard)
  @Mutation(() => UserModel)
  async signin(@Args('input') _: userCreateInput, @Context() ctx: any) {
    return ctx.req.user;
  }
  @Mutation(() => String)
  async signout(@Context() ctx: any) {
    console.log(ctx.req.session);
    ctx.req.session.destroy();
    return 'Destroy-session';
  }
}
