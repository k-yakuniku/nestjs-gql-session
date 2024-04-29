import { CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export class LoginAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    console.log(' === LoginAuthGuard ===');
    const ctx = GqlExecutionContext.create(context);
    const gqlReq = ctx.getContext().req;

    if (gqlReq) {
      const result = gqlReq.isAuthenticated();
      return result;
    }
    //return context.switchToHttp().getRequest().isAuthenticated();
  }
}
