import { Body, Controller, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from 'src/interfaces/dtos/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  async CreateCategory(@Body() categoryDto: CategoryDto): Promise<any> {
    await this.categoryService.CreateCategory(categoryDto);
    return;
  }
}
