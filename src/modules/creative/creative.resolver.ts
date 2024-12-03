import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Creative } from './creative.entity';
import { GenerateCreativeDto } from './dto/generateCreative.dto';
import { CreativeService } from './services/creative.service';

@Resolver()
export class CreativeResolver {
  constructor(private readonly creativeService: CreativeService) {}

  @Query(() => [Creative])
  async getCreatives() {
    return this.creativeService.getCreatives();
  }

  @Mutation(() => Creative)
  async generateCreative(
    @Args('data') data: GenerateCreativeDto
  ) {
    return this.creativeService.generateCreative(data);
  }

  @Mutation(() => Creative)
  async saveCreative(@Args('id') id: string) {
    return this.creativeService.saveCreative(id);
  }

  @Query(() => Creative)
  async getCreative(@Args('id') id: string) {
    return this.creativeService.getCreative(id);
  }
}
