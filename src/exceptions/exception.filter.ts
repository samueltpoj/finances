import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { CustomHttpException } from './custom-http-exception';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    if (exception instanceof CustomHttpException) {
      const { message, success } = exception.getResponse() as {
        message: string;
        success: boolean;
      };

      response.status(status).json({
        statusCode: status,
        success: success,
        message: message,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    } else {
      response.status(status).json({
        statusCode: status,
        success: false,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }
}
