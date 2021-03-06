grammar RegConditionReg;

condition : expr EOF
	;
expr : '(' expr ')' #Expression
	| atomic #AtomicExpression
	| 'not' expr #Not
	| expr AND expr #And
	| expr OR expr #Or
	;
atomic : 'none'
	| concurrence
	| COURSE_NUM
	| req_year
	// | at_least_req_year
	| consent
	| 'fac' EQ FIELD_NUM
	| 'ma' EQ FIELD_NUM
	| 'sub' EQ FIELD_NUM
	// | 'lev' EQ LEVEL_NUM // grad course only
	// | req_student
	// | req_fac_group
	;
// req_student : (req_fac | req_fac_group)
// 	;
// req_fac : field 'students' #ReqFaculty
// 	| field 'students in' req_major #ReqFacultyAndMajor
// 	;
// req_fac_group : 'students in' field 'group';
// req_major : field 'major' #ReqMajor
// 	| field 'sub-major' #ReqSubMajor
// 	;
concurrence : 'con' COURSE_NUM;
req_year : YEAR;
// at_least_req_year : 'at least' req_year;
consent : 'consent';
// field : (FIELD | AND | OR)+;

YEAR : '1st' | '2nd' | '3rd' | '4th' | '5th' | '6th';
COURSE_NUM : [0-9][0-9][0-9][0-9][0-9][0-9];
FIELD_NUM : [0-9][0-9];
LEVEL_NUM : [0-9];
AND : 'and';
OR : 'or';
FIELD : [a-z\-,]+;
EQ : '=';
// LPAREN : '(';
// RPAREN : ')';
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