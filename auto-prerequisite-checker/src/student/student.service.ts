import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cache } from 'cache-manager';
import { Model } from 'mongoose';
import { StudentData, StudentDocument } from './data.type.decl';
import { Student } from './student.schema';

@Injectable()
export class StudentService {
	constructor(
		@Inject(CACHE_MANAGER) private cacheManager: Cache,
		@InjectModel(Student.name) private studentModel: Model<StudentDocument>
	) {}

	async updateStudentsData(data: StudentData[]): Promise<void> {
		await this.studentModel.deleteMany({}).exec();
		data.forEach(async (std: StudentData) => {
			const stdModel: Student = {
				stdId: std.student_id,
				facId: std.faculty_id,
				majorId: std.major_id,
				curriculumId: std.curriculum_id,
				year: std.year_admit,
			}
			const createdStd = new this.studentModel(stdModel);
			await createdStd.save();
		});
	}

	async getStudentCourses(stdId: string): Promise<string[]> {
		return await this.cacheManager.get<string[]>('courses:' + stdId);
	}

	async setStudentCourses(stdId: string, courseIds: string[]): Promise<void> {
		await this.cacheManager.set<string[]>('courses:' + stdId, courseIds, { ttl: 0 });
	}
}
