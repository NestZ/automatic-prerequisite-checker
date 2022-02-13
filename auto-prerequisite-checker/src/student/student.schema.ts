import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Student {
  @Prop()
  stdId: string;

  @Prop()
  facId: string;

  @Prop()
  majorId: string;

  @Prop()
  curriculumId: string;

  @Prop()
  year: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);