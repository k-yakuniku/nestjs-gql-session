import { Field, InputType } from '@nestjs/graphql';

// @InputType()
// export class postByInput {
//   @Field(() => String, { nullable: false })
//   userId!: string;
// }

@InputType()
export class postCreateInput {
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  description?: string;
}
@InputType()
export class postUpdateInput {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  description?: string;
}
@InputType()
export class postDeleteInput {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  userPassword!: string;
}
