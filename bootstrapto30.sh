#!/bin/bash
FILES=*.html
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
  echo "Removing fluid environment to default row: $f";
  sed "s/container-fluid/container/g" $f > $TEMP/$f
  cp $TEMP/$f $f
  echo ".hero-unit is not .jumbotron: $f";
  sed "s/hero-unit/jumbotron/g" $f > $TEMP/$f
  cp $TEMP/$f $f
done
