export type Student = {
	stdId: string;
	facId: string;
	majorId: string;
	curriculumId: string;
	year: string;
}

export type StudentData = {
	student_id: string,
	faculty_id: string,
	major_id: string,
	curriculum_id: string,
	year_admit: string,
}

export type Course = {
	COURSENO: string,
	STUDENT_ID: string,
	GRADE: string,
}