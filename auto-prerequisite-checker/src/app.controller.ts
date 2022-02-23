import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';

@Controller()
export class AppController implements OnModuleInit {
  constructor(
    private readonly appService: AppService,
    private readonly student: StudentController, 
    ) {}

  async onModuleInit(): Promise<void> {
    await this.student.clearCache();
    await this.student.updateStudentsData(); 
    // await this.student.updateStudentCourses();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
