import { Inject, Injectable } from '@nestjs/common';
import { GenerateCreativeDto } from '../../creative/dto/generateCreative.dto';
import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { OpenAI } from 'openai';
import { openAiConfig } from '../config/openai.config';
import { AI_CONFIG } from '../config/providers/ai.provider';
import { PROMPTS_CONFIG } from '../config/providers/prompts.provider';
import { PromptsConfig } from '../config/factories/prompts.config';

@Injectable()
export class AiService {
  private llm: ChatOpenAI;
  private openai: OpenAI; 

  constructor(@Inject(AI_CONFIG) private config: ReturnType<typeof openAiConfig>, @Inject(PROMPTS_CONFIG) private promptsConfig: PromptsConfig  ) {
    const { langChain, openai } = this.config;
    this.llm = langChain;
    this.openai = openai;
  }

  async generateCreativeText(data: GenerateCreativeDto) {
    const { topic, keywords } = data;
    const template = this.promptsConfig.creative.text;
    const promptTemplate = PromptTemplate.fromTemplate(template);
    
    const formattedPrompt = await promptTemplate.format({
      topic: topic,
      keywords: keywords?.length ? ` incorporating these keywords: ${keywords.join(', ')}` : '',
    });

    const result = await this.llm.invoke(formattedPrompt);
    
    return result.content;
  }

  async generateImage(prompt: string): Promise<string> {
    const response = await this.openai.images.generate({
      prompt,
      n: 1,
      size: '256x256',
      response_format: 'b64_json', 
    });

    return response.data[0].b64_json || ''; 
  }

  async generateImageAlt(description: string): Promise<string> {
    const template = this.promptsConfig.image.alt;
    const promptTemplate = PromptTemplate.fromTemplate(template);
    
    const formattedPrompt = await promptTemplate.format({
      description,
    });

    const result = await this.llm.invoke(formattedPrompt);
    
    return result.content.toString();
  }
}
