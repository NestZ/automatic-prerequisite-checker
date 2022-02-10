grammar RegCondition;

condition : expr EOF
	;
expr : '(' expr ')' #Expression
	| atomic #AtomicExpression
	| expr AND expr #And
	| expr OR expr #Or
	;
atomic : 'none'
	| 'see bulletin'
	| concurrence
	| COURSE_NUM
	| req_year
	| at_least_req_year
	| consent
	| req_student
	| req_fac_group
	;
req_student : 'for' req_fac
	| 'not for' req_fac
	;
req_fac : field 'students' #ReqFaculty
	| field 'students in' req_major #ReqFacultyAndMajor
	;
req_fac_group : 'for students in' field 'group';
req_major : field 'major' #ReqMajor
	| field 'sub-major' #ReqSubMajor
	;
concurrence : 'concurrent to' COURSE_NUM;
req_year : YEAR 'year standing';
at_least_req_year : 'at least' req_year;
consent : 'consent of the' CONSENT_OF;
field : (FIELD | AND | OR)+;

CONSENT_OF : 'department' | 'instructor' | 'faculty' | 'advisor';
YEAR : 'first' | 'second' | 'third' | 'fourth' | 'fifth' | 'sixth';
COURSE_NUM : [0-9][0-9][0-9][0-9][0-9][0-9];
AND : 'and';
OR : 'or';
FIELD : [a-z\-,]+;
WS : [ \n] -> skip;

//what is red parentheses after major name ? -> use black
//which is major or sub-major ?
//add group of faculty to grammar วิทย์สุขภาพ (health science) วิทย์เทคโนโลยี (sciences and technology) มนุษย์สังคม (humanities and social sciences)
//manually fixed conditions
//update semantic action (check valid major / faculty)
//fix data schema
//fix for / not for