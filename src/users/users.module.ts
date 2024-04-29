import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserResolver } from './models/users.resolve';
import { PrismaService } from 'src/_libs/prisma.client';

@Module({
  providers: [UsersService, UserResolver, PrismaService],
})
export class UsersModule {}
