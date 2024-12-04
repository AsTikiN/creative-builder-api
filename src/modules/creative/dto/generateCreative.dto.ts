import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GenerateCreativeDto {
  @Field(() => String)
  topic: string;

  @Field(() => [String], { nullable: true })
  keywords?: string[];
}
