import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req: Request) {}

  @Get('/auth/google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: Request) {
    return this.authService.googleLogin(req);
  }
}
