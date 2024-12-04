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

  @Field(() => Boolean)
  isSaved: boolean;

  @Field(() => [String])
  keywords: string[];

  @Field(() => String)
  alt: string;

  @Field(() => Date)
  createdAt: Date;
}
