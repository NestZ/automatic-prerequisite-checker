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
	| 'engineering' | 'arts, media and technology' | 'business administration';
DEP : 'biology' | 'english' | 'government' | 'japanese' | 'french' | 'environmental science'
	| 'geology' | 'statistics' | 'material science' | 'physics' | 'early childhood-special education'
	| 'home and community' | 'mechanical engineering' | 'food science and technology'
	| 'psychology' | 'history' | 'mathematics' | 'animal science' | 'accountancy' | 'biotechnology'
	| 'animation' | 'product development technology' | 'biochemistry and biochemical technology'
	| 'industrial engineering' | 'civil engineering' | 'german' | 'finance and banking' | 'chinese'
	| 'agricultural extension' | 'burmese' | 'marketing' | 'management';
SUB_DEP : 'optometry' | 'microbiology' | 'physical therapy' | 'occupational therapy';
WS : [ \n] -> skip;

// -
//112212 duplicate
//economics faculty has the same name with economics major (also mass communication and agriculture)
//ยึดชื่อ faculty / department ตาม excel ? medicine / medical, destistry / dental, agriculture / agricultural, accounting / accountancy
//opthalmology = optometry ?
//associated medical science = medical technology ?
//176 course num ?
//what is red parentheses after major name ?
//which is major or sub-major ?