import { Module } from '@nestjs/common';
import { CreativeResolver } from './creative.resolver';
import { CreativeService } from './services/creative.service';
import { AiModule } from '@modules/ai/ai.module';
import { PrismaModule } from '@modules/prisma/prisma.module';

@Module({
  imports: [AiModule, PrismaModule],
  providers: [CreativeResolver, CreativeService],
  exports: [CreativeService],
})
export class CreativeModule {}
