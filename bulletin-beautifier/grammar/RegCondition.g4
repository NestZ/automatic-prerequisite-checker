grammar RegCondition;

s : expr EOF;
expr : atomic | expr 'and' expr | expr 'or' expr;
atomic : '(' expr ')' | 'none' | 'see bulletin' | concurrence | COURSE_NUM | req_year | at_least_req_year
	| consent | req_student;
concurrence : 'concurrent to' COURSE_NUM;
req_year : YEAR 'year standing';
at_least_req_year : 'at least' req_year;
req_student : req_fac | 'non' req_fac;
req_fac : FAC 'students' | FAC 'students in' req_major;
req_major : DEP 'major' | SUB_DEP 'sub-major';
consent : 'consent of the' CONSENT_OF;

CONSENT_OF : 'department' | 'instructor' | 'faculty' | 'advisor';
YEAR : 'first' | 'second' | 'third' | 'fourth' | 'fifth' | 'sixth';
COURSE_NUM : [0-9][0-9][0-9][0-9][0-9][0-9];
FAC : 'medicine' | 'pharmacy' | 'veterinary medicine' | 'dentistry' | 'architecture' | 'science'
	| 'associated medical sciences' | 'economics' | 'agro-industry' | 'agriculture' | 'humanities'
	| 'engineering';
DEP : 'biology' | 'english' | 'government' | 'japanese' | 'french' | 'environmental science'
	| 'geology' | 'statistics' | 'material science' | 'physics' | 'early childhood-special education'
	| 'home and community' | 'mechanical engineering' | 'food science and technology'
	| 'psychology' | 'history';
SUB_DEP : 'optometry' | 'microbiology' | 'physical therapy' | 'occupational therapy';
WS : [ \n] -> skip;

// -
//french is in education and humanities ?
//agriculture is department and faculty
//req_student : req_fac | 'non' req_fac
//req_fac : FAC 'students' | FAC 'students in' req_major
//req_major : DEP 'major' | SUB_DEP 'sub-major'
//112212 duplicate
//economics faculty has one major ?
//ยึดชื่อ faculty / department ตาม excel ? medicine / medical, destistry / dental
//opthalmology = optometry ?
//associated medical science = medical technology ?