#!/bin/zsh
source ~/.zshrc
antlr4 -Dlanguage=Java RegCondition.g4
javac *.java
grun RegCondition s -gui < $1