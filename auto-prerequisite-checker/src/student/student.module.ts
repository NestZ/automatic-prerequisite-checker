import * as redisStore from 'cache-manager-redis-store';
import { Module, CacheModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './student.schema';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
  ],
  providers: [StudentService],
  controllers: [StudentController]
})
export class StudentModule {}
