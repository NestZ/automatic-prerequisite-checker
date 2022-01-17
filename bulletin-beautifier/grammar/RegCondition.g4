grammar RegCondition;

s : expr EOF;
expr : expr 'and' expr | expr 'or' expr | atomic;
atomic : 'none' | 'see bulletin' | concurrence | COURSE_NUM | req_year | consent | '(' expr ')';
concurrence : 'concurrent to' COURSE_NUM;
req_year : YEAR 'year standing';
consent : 'consent of the' CONSENT_OF;

CONSENT_OF : 'department' | 'instructor' | 'faculty' | 'advisor';
YEAR : 'first' | 'second' | 'third' | 'fourth' | 'fifth' | 'sixth';
COURSE_NUM : [0-9][0-9][0-9][0-9][0-9][0-9];
WS : [ \n] -> skip;

// ; or; ?
// replace COURSE_NUM 'or concurrent' with 'concurrent to' COURSE_NUM