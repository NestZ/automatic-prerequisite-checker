#!/bin/zsh
source ~/.zshrc
antlr4 -Dlanguage=Java RegCondition.g4
javac *.java
FAIL=0
for filename in ../conditions/*.txt;
do
	OUTPUT=$(grun RegCondition s < $filename 2>&1)
	if [[ -n "$OUTPUT" ]]
	then
		FAIL=$((FAIL+1))
	fi
	echo "$filename"
done
echo "$FAIL"

# Before : 1821
# After fixing typo, replace nan with NONE, replace some synonym : 1749