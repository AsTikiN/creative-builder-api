import { Injectable } from '@nestjs/common';
import { GenerateCreativeDto } from '../dto/generateCreative.dto';
import { AiService } from '@modules/ai/services/ai.service';
import { PrismaService } from '@modules/prisma/prisma.service';
import { Creative } from '@prisma/client';

@Injectable()
export class CreativeService {
  constructor(private readonly aiService: AiService, private readonly prisma: PrismaService) {}

  async createCreative(data: Omit<Creative, 'id' | "createdAt">) {
    return this.prisma.creative.create({
      data,
    });
  }

  async getCreatives() {
    return this.prisma.creative.findMany({where: {isSaved: true}});
  }

  async generateCreative(data: GenerateCreativeDto): Promise<Creative> {
    const [creativeText, imageUrl] = await Promise.all([
      this.aiService.generateCreativeText(data),
      this.aiService.generateImage(`Avatar for ${data.topic}`),
    ]);

    const alt = await this.aiService.generateImageAlt(creativeText.toString());

    const creative = await this.createCreative({
      title: data.topic,
      description: creativeText.toString(),
      image: imageUrl,
      isSaved: false,
      keywords: data.keywords || [],
      alt,
    });

    return creative;
  }
  
  async saveCreative(id: string) {
    return this.prisma.creative.update({
      where: { id },
      data: { isSaved: true },
    });
  }

  async getCreative(id: string) {
    return this.prisma.creative.findUnique({ where: { id, isSaved: true } });
  }
}
