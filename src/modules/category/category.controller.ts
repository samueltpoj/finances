import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  async CreateCategory(@Body() categoryDto: CategoryDto): Promise<any> {
    return await this.categoryService.createCategory(categoryDto);
  }

  @Get()
  async findAll() {
    return await this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.categoryService.findOne(id);
  }
}
