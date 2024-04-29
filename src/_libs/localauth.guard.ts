import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('=== LocalAuthGuard-canActivate ===');
    const ctx = GqlExecutionContext.create(context);
    const gqlReq = ctx.getContext().req;

    const result = (await super.canActivate(context)) as boolean;
    await super.logIn(gqlReq);
    return result;
  }
  getRequest(context: ExecutionContext) {
    console.log('=== LocalAuthGuard-getReques ===');
    const ctx = GqlExecutionContext.create(context);
    const gqlReq = ctx.getContext().req;
    if (gqlReq) {
      const { input } = ctx.getArgs();
      gqlReq.body = input;
      return gqlReq;
    }
    return context.switchToHttp().getRequest();
  }
}
