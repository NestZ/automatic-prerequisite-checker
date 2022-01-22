grammar RegCondition;

s : expr EOF;
expr : expr 'and' expr | expr 'or' expr | atomic;
atomic : 'none' | 'see bulletin' | concurrence | COURSE_NUM | req_year | at_least_req_year
	| consent | req_major | req_sub_major | req_fac | '(' expr ')';
concurrence : 'concurrent to' COURSE_NUM;
req_year : YEAR 'year standing';
at_least_req_year : 'at least' req_year;
req_fac : FAC 'students' | 'non' FAC 'students';
req_major : DEP? 'major students' | 'non' DEP? 'major students';
req_sub_major : SUB_DEP 'sub-major students';
consent : 'consent of the' CONSENT_OF;

CONSENT_OF : 'department' | 'instructor' | 'faculty' | 'advisor';
YEAR : 'first' | 'second' | 'third' | 'fourth' | 'fifth' | 'sixth';
COURSE_NUM : [0-9][0-9][0-9][0-9][0-9][0-9];
FAC : 'medical' | 'pharmacy' | 'veterinary medicine' | 'dental' | 'architectural' | 'medical technology' | 'agricultural'
	| 'economics' | 'agro-industry';
DEP : 'philosophy and religion' | 'biology' | 'english' | 'politics and government' | 'japanese'
	| 'international affairs' | 'french' | 'geology' | 'accounting' | 'statistics' | 'microbiology'
	| 'home and country' | 'mechanical engineering';
SUB_DEP : 'optometry';
WS : [ \n] -> skip;

// can merge consent of the .. department and consent of department ?