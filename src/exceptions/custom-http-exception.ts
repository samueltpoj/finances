import { HttpException } from '@nestjs/common';

export class CustomHttpException extends HttpException {
  constructor(success: boolean, status?: number, message?: string) {
    super({ message, success }, status);
  }
}
