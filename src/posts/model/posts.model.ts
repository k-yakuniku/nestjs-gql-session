import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostModel {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  description: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => String, { nullable: false })
  userId!: string;
}
