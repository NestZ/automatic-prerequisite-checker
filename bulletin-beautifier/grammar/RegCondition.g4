grammar RegCondition;

s : expr EOF;
expr : expr 'and' expr | expr 'or' expr | atomic;
atomic : 'none' | 'see bulletin' | concurrence | COURSE_NUM | req_year | consent | req_fac | MAJOR_OR_NON | '(' expr ')';
concurrence : 'concurrent to' COURSE_NUM;
req_year : YEAR 'year standing';
req_fac : FAC 'students';
consent : 'consent of the' CONSENT_OF;

CONSENT_OF : 'department' | 'instructor' | 'faculty' | 'advisor';
YEAR : 'first' | 'second' | 'third' | 'fourth' | 'fifth' | 'sixth';
COURSE_NUM : [0-9][0-9][0-9][0-9][0-9][0-9];
FAC : 'medical' | 'pharmacy' | 'veterinary medicine' | 'dental' | 'architectural' | 'medical technology' | 'agricultural'
	| 'economics';
MAJOR_OR_NON : 'major students' | 'non-major students';
WS : [ \n] -> skip;

// for major / non-major only
/// for ... students