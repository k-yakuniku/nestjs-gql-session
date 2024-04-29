import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostModel } from './posts.model';
import {
  postCreateInput,
  postDeleteInput,
  postUpdateInput,
} from './posts.args';
import { PostsService } from '../posts.service';
import { UseGuards } from '@nestjs/common';
import { LoginAuthGuard } from 'src/_libs/loginauth.guard';

@Resolver()
export class PostResolve {
  constructor(private readonly postService: PostsService) {}
  @UseGuards(LoginAuthGuard)
  @Query(() => [PostModel])
  async getPosts(@Context() ctx: any) {
    const { id } = ctx.req.user;
    return await this.postService.getPosts(id);
  }
  @UseGuards(LoginAuthGuard)
  @Mutation(() => PostModel)
  async createPost(@Args('input') args: postCreateInput, @Context() ctx: any) {
    //const { id, name, introduction, email } = ctx.req.user;
    const { id } = ctx.req.user;
    return await this.postService.createPost(args, id);
  }
  @UseGuards(LoginAuthGuard)
  @Mutation(() => PostModel)
  async updatePost(@Args('input') args: postUpdateInput, @Context() ctx: any) {
    const { id } = ctx.req.user;
    return await this.postService.updatePost(args, id);
  }
  @UseGuards(LoginAuthGuard)
  @Mutation(() => PostModel)
  async deletePost(@Args('input') args: postDeleteInput, @Context() ctx: any) {
    const { id } = ctx.req.user;
    return await this.postService.deletePost(args, id);
  }
}
