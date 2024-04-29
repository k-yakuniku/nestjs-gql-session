import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PrismaService } from 'src/_libs/prisma.client';
import { PostResolve } from './model/posts.resolve';

@Module({
  providers: [PrismaService, PostsService, PostResolve],
})
export class PostsModule {}
