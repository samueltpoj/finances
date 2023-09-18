import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CategoryDto } from 'src/interfaces/dtos/category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async CreateCategory(categoryDto: CategoryDto): Promise<any> {
    if (!categoryDto) {
      return {
        success: false,
        statusCode: 400,
        message: `Verifique os campos necessários`,
      };
    }
    await this.prisma.categories.create({
      data: {
        name: categoryDto.name,
        description: categoryDto.description,
      },
    });
    return {
      success: true,
      statusCode: 200,
      message: `Categoria adicionada com sucesso`,
    };
  }
}
