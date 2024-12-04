import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { AiModule } from '@modules/aiOld/ai.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { CreativeModule } from '@modules/creative/creative.module';
import { AiModule } from '@modules/ai/ai.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.local'],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    AiModule,
    CreativeModule,
  ],
})
export class RootModule {}
