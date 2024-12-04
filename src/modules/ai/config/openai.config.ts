import { ChatOpenAI } from '@langchain/openai';
import { OpenAI } from 'openai';

export const openAiConfig = () => ({
  langChain: new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    modelName: 'gpt-3.5-turbo',
    temperature: 0.7,
  }),
  
  openai: new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  }),
});