#!/bin/bash
FILES=*
TEMP="./temp"
mkdir temp

for f in $FILES
do
  echo "Replacing span to col: $f";
  for (( i=1; i <= 12; i++ ))
  do
 	sed "s/span$i/col-$i/g" $f > $TEMP/$f
 	cp $TEMP/$f $f
 	#echo "Replaced span$i to col-$i in file $f"
  done
  echo "Removing fluid environment to default row: $f";
  sed "s/row-fluid/row/g" $f > $TEMP/$f
  cp $TEMP/$f $f
  echo ".jumbotron is not .jumbotron: $f";
  sed "s/jumbotron/jumbotron/g" $f > $TEMP/$f
  cp $TEMP/$f $f
done
