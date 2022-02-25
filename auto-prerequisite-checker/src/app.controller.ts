import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
