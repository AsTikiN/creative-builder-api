import { createPromptsConfig } from '../factories/prompts.config';

export const PROMPTS_CONFIG = 'PROMPTS_CONFIG';

export const PromptsProvider = {
  provide: PROMPTS_CONFIG,
  useFactory: createPromptsConfig
};