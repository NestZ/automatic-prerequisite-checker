import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { Course, Student, StudentData } from './data.type.decl';

@Injectable()
export class StudentService {
	constructor(
		@Inject(CACHE_MANAGER) private cacheManager: Cache,
	) {}

	async updateStudentsData(data: StudentData[]): Promise<void> {
		data.forEach(async (std: StudentData) => {
			await this.setCache('facId:' + std.student_id, std.faculty_id);
			await this.setCache('majorId:' + std.student_id, std.major_id);
			await this.setCache('curriculumId:' + std.student_id, std.curriculum_id);
			await this.setCache('year:' + std.student_id, std.year_admit);
		});
	}

	async updateStudentCourses(data: Course[]): Promise<void> {
		for (let rec of data) {
			if (rec.GRADE === 'F' || rec.GRADE === 'W' || rec.GRADE === 'U' || rec.GRADE === 'P')
				continue;
			const curLst: string[] = (await this.getCache('courses:' + rec.STUDENT_ID) as string[]) || [];
			await this.setCache('courses:' + rec.STUDENT_ID, curLst.concat([rec.COURSENO]));
		}
	}

	async getStudentCourses(stdId: string): Promise<string[]> {
		return await this.getCache('courses:' + stdId) as string[];
	}

	async getStudentData(stdId: string): Promise<Student> {
		const facId: string = (await this.getCache('facId:' + stdId)) as string;
		const year: string = (await this.getCache('year:' + stdId)) as string;
		const majorId: string = (await this.getCache('majorId:' + stdId)) as string;
		const curriculumId: string = (await this.getCache('curriculumId:' + stdId)) as string;
		const data: Student = {
			stdId,
			facId,
			majorId,
			curriculumId,
			year,
		};
		if(facId === null && year === null) throw "Can't find student with id " + stdId;
		return data;
	}

	async clearCache(): Promise<void> {
		await this.cacheManager.reset();
	}

	async setCache(key: string, value: string | string[]): Promise<void> {
		await this.cacheManager.set<string | string[]>(key, value || '', { ttl: 0 });
	}

	async getCache(key: string): Promise<string | string[]> {
		return await this.cacheManager.get<string | string[]>(key);
	}
}
