import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CategoryDto } from './dto/category.dto';
import { CustomHttpException } from 'src/exceptions/custom-http-exception';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async createCategory(categoryDto: CategoryDto) {
    if (!categoryDto)
      throw new CustomHttpException(
        false,
        400,
        'Verifique os campos necessários',
      );

    await this.prisma.categories.create({
      data: {
        name: categoryDto.name,
        description: categoryDto.description,
      },
    });
  }

  async findAll() {
    return await this.prisma.categories.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.categories.findUnique({
      where: { category_id: Number(id) },
    });
  }
}
