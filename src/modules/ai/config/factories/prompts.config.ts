export const createPromptsConfig = () => ({
  creative: {
    text: 'Answer in 2 sentences. Generate a creative idea about {topic}{keywords}',
  },
  image: {
    alt: `Generate a concise alt text description in one sentence for an image with the following context: {description}. 
         Require that the alt text is not longer than 100 characters. 
         Require that the alt text must be SEO optimized.`
  }
} as const);

export type PromptsConfig = ReturnType<typeof createPromptsConfig>;