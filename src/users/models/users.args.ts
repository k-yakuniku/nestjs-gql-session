import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

@InputType()
export class userByArgs {
  @Field(() => String, { nullable: false })
  id!: string;
}
@InputType()
export class userCreateInput {
  // nullable: false => required Faild
  // nullable: true  => allow null
  @Field(() => String, { nullable: false })
  @IsEmail()
  email!: string;
  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  @Length(4, 50)
  password!: string;
}
@InputType()
export class userUpdateInput {
  @Field(() => String, { nullable: false })
  @IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  introduction?: string;
}
@InputType()
export class userDeleteInput {
  @Field(() => String, { nullable: false })
  @IsEmail()
  email!: string;
  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  password!: string;
}
