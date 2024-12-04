import { Test, TestingModule } from '@nestjs/testing';
import { CreativeResolver } from './creative.resolver';

describe('CreativeResolver', () => {
  let resolver: CreativeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreativeResolver],
    }).compile();

    resolver = module.get<CreativeResolver>(CreativeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
