import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Creative {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  image: string;

  @Field(() => String)
  alt: string;

  @Field(() => [String])
  keywords: string[];

  @Field(() => Date)
  createdAt: Date;
}
