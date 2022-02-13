import { Student } from "./student.schema";
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

export type StudentData = {
	student_id: string,
	student_prefix: string,
	name_th: string,
	middle_name_th: string,
	surname_th: string,
	name_en: string,
	middle_name_en: string,
	surname_en: string,
	faculty_id: string,
	major_id: string,
	curriculum_id: string,
	level_id: string,
	sex_id: string,
	major_name_th: string,
	level_name_th: string,
	degree_name_long_th: string,
	plan_id: null,
	plan_name_th: null,
	race_id: string,
	nationality_id: string,
	religion_id: string,
	date_admit: Date,
	semester_admit: string,
	year_admit: string,
	study_time_id: string,
	adviser_id: string,
	adviser_name: string,
	adviser_cmu_account: string,
}