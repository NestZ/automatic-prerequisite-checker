grammar RegCondition;

s : expr EOF;
expr : atomic | expr 'and' expr | expr 'or' expr;
atomic : 'none' | COURSE_NUM | concurrence | req_year | consent | '(' expr ')';
concurrence : 'concurrent to' COURSE_NUM;
req_year : YEAR 'year standing';
consent : 'consent of the' CONSENT_OF;

CONSENT_OF : 'department' | 'instructor';
YEAR : 'first' | 'second' | 'third' | 'forth' | 'fifth' | 'sixth';
COURSE_NUM : [0-9][0-9][0-9][0-9][0-9][0-9];
WS : [ \n] -> skip;