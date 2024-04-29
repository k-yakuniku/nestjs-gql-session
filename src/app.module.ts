import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import * as path from 'path';
import * as session from 'express-session';
import * as passport from 'passport';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env`, `.env.local`],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(process.cwd(), 'src/generated/schema.gql'),
      playground: {
        settings: {
          'request.credentials': 'include',
          //'request.credentials': 'same-origin',
        },
      },
    }),
    UsersModule,
    PostsModule,
    AuthModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          secret: 'sessionsecretKey',
          resave: false,
          saveUninitialized: false,
          cookie: {
            secure: false,
            httpOnly: false,
            domain: 'localhost',
            sameSite: 'lax',
            maxAge: 60 * 60 * 1000,
          },
        }),
        passport.initialize(),
        passport.session(),
      )
      .forRoutes('*');
  }
}
