import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPort(): string {
    return `API working in port ${process.env.PORT}`;
  }
}
