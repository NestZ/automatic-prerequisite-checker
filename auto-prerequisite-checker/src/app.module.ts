import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PreCheckerModule } from './pre-checker/pre-checker.module';

@Module({
  imports: [PreCheckerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
