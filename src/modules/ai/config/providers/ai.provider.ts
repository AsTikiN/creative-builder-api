import { Provider } from '@nestjs/common';
import { openAiConfig } from '../factories/ai.config';

export const AI_CONFIG = 'AI_CONFIG';

export const AiConfigProvider: Provider = {
  provide: AI_CONFIG,
  useFactory: () => openAiConfig(),
};