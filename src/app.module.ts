import { CategoryModule } from './routes/category/category.module';
import { CategoryService } from './routes/category/category.service';
import { CategoryController } from './routes/category/category.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';

@Module({
  controllers: [CategoryController, AppController],
  providers: [CategoryService, AppService, PrismaService],
  imports: [CategoryModule, AppModule],
})
export class AppModule {}
