import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/_libs/prisma.client';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { AuthResolve } from './models/auth.resolve';

@Module({
  providers: [
    AuthService,
    AuthResolve,
    PrismaService,
    LocalStrategy,
    SessionSerializer,
  ],
})
export class AuthModule {}
