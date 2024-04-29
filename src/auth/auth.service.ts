import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/_libs/prisma.client';

@Injectable()
export class AuthService {
  constructor(private readonly db: PrismaService) {}
  async validation(email: string, password: string) {
    return await this.db.users.findFirst({
      where: { email, password },
    });
  }
  async deserializer(email: string) {
    const user = await this.db.users.findFirst({
      where: { email },
      select: {
        id: true,
        name: true,
        introduction: true,
        email: true,
      },
    });
    return user;
  }
}
