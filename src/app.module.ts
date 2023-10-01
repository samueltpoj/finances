import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { CategoryController } from './modules/category/category.controller';
import { CategoryService } from './modules/category/category.service';
import { CategoryModule } from './modules/category/category.module';
import { PrismaService } from './database/prisma.service';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { GoogleStrategy } from './auth/google.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    CategoryModule,
    AppModule,
    UsersModule,
  ],
  controllers: [AuthController, CategoryController, AppController],
  providers: [
    AuthService,
    CategoryService,
    AppService,
    PrismaService,
    GoogleStrategy,
  ],
})
export class AppModule {}
