grammar RegCondition;

s : expr EOF;
expr : atomic | expr 'and' expr | expr 'or' expr;
atomic : 'none' | 'see bulletin' | COURSE_NUM | concurrence | req_year | consent | '(' expr ')';
concurrence : 'concurrent to' COURSE_NUM | COURSE_NUM 'or concurrent';
req_year : YEAR 'year standing';
consent : 'consent of the' CONSENT_OF;

CONSENT_OF : 'department' | 'instructor' | 'faculty' | 'advisor';
YEAR : 'first' | 'second' | 'third' | 'fourth' | 'fifth' | 'sixth';
COURSE_NUM : [0-9][0-9][0-9][0-9][0-9][0-9];
WS : [ \n] -> skip;

// ; or ; ?
// ; and / ; or