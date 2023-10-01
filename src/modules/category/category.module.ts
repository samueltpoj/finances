import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  imports: [],
  controllers: [],
  providers: [CategoryService, PrismaService],
  exports: [CategoryService],
})
export class CategoryModule {}
