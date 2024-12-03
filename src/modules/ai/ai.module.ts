import { Module } from '@nestjs/common';
import { AiService } from './services/ai.service';
import { AiConfigProvider } from './config/providers/ai.provider';
import { PromptsProvider } from './config/providers/prompts.provider';

@Module({
  providers: [AiService, AiConfigProvider, PromptsProvider],
  exports: [AiService],
})
export class AiModule {}
