#!/bin/zsh
source ~/.zshrc
antlr4 -Dlanguage=Java RegCondition.g4 -visitor
javac *.java
grun RegCondition s -gui < $1