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
req_student : 'for' (req_fac | req_fac_group)
	| 'not for' (req_fac | req_fac_group)
	;
req_fac : field 'students' #ReqFaculty
	| field 'students in' req_major #ReqFacultyAndMajor
	;
req_fac_group : 'students in' field 'group';
req_major : field 'major' #ReqMajor
	| field 'sub-major' #ReqSubMajor
	;
concurrence : 'concurrent to' COURSE_NUM;
req_year : YEAR 'year standing';
at_least_req_year : 'at least' req_year;
consent : 'consent of the' CONSENT_OF;
field : (FIELD | AND | OR)+;

CONSENT_OF : 'department' | 'instructor' | 'faculty' | 'advisor' | 'academic committee';
YEAR : 'first' | 'second' | 'third' | 'fourth' | 'fifth' | 'sixth';
COURSE_NUM : [0-9][0-9][0-9][0-9][0-9][0-9];
AND : 'and';
OR : 'or';
FIELD : [a-z\-,]+;
WS : [ \n] -> skip;

//what is red parentheses after major name ? -> use black
//which is major or sub-major ?
//update semantic action (check valid major / faculty)
//fix data schema
//merge error and manual file from reg
//check major / faculty name (have s or not ?)
//grouping up faculty group in manual file
//science based : science, engineering, agriculture, agro-industry, architecture
//humanities and social science : humanities, education, fine arts, social sciences, business administration, economics, mass communication, political science and public administration, law
//(science based, humanities and social science, sciences and technology, health sciences)