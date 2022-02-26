import Expression from "../obj/Expression";

export type Course = {
	courseno: string,
	title_long_en: string,
	degree_level: string,
	pre_en: string,
	year_end: string,
	open_status: string,
};

export type CourseCondition = {
	[courseNum: string]: Expression;
};

export type FacultyData = {
	facId: string,
	facName: string,
	facGroup: string,
	isScienceBased: string,
};

export type MajorData = {
	facId: string,
	majorId: string,
	majorName: string,
};

export type SubMajorData = {
	facId: string,
	majorId: string,
	subMajorId: string,
	subMajorName: string,
};

export type FacGroupData = {
	facGroupId: string,
	facGroupName: string,
};

export type Student = {
	stdId: string;
	facId: string;
	majorId: string;
	curriculumId: string;
	year: string;
}