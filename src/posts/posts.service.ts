import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/_libs/prisma.client';
import {
  // postByInput,
  postCreateInput,
  postDeleteInput,
  postUpdateInput,
} from './model/posts.args';

@Injectable()
export class PostsService {
  constructor(private readonly db: PrismaService) {}
  async getPosts(userId: string) {
    const posts = await this.db.posts.findMany({
      where: {
        userId,
      },
    });
    return posts;
  }
  //async getByPost() {}
  async createPost(args: postCreateInput, userId: string) {
    const { title, description } = args;
    const post = await this.db.posts.create({
      data: {
        title,
        description,
        user: {
          connect: { id: userId },
        },
      },
    });
    return post;
  }
  async updatePost(args: postUpdateInput, userId: string) {
    const { id, title, description } = args;
    const post = await this.db.posts.update({
      where: {
        id,
        userId,
      },
      data: { title, description },
    });
    return post;
  }
  async deletePost(args: postDeleteInput, userId: string) {
    const { id, userPassword } = args;
    const post = await this.db.posts.delete({
      where: {
        id,
        userId,
        user: {
          password: userPassword,
        },
      },
    });
    return post;
  }
}
