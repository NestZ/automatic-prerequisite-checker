#!/bin/zsh
source ~/.zshrc
antlr4 -Dlanguage=Java RegCondition.g4 -visitor
javac *.java
FAIL=0
parse () {
	OUTPUT=$(grun RegCondition s < $1 2>&1)
	if [[ -n "$OUTPUT" ]]
	then
		FAIL=$((FAIL+1))
		CON="$1 $(cat $1)"
		echo $CON >> out.txt
	fi
	echo "$1"
}
for filename in ../conditions/*.txt;
do
	parse $filename &
done
wait
echo "$FAIL"
