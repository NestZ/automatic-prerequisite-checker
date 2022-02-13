import * as redisStore from 'cache-manager-redis-store';
import { Module, CacheModule } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    }),
    HttpModule,
  ],
  providers: [StudentService],
  controllers: [StudentController]
})
export class StudentModule {}
