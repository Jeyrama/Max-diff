/*
You must implement a function that returns the difference between the largest 
and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers.
If lst is empty or contains a single element, return 0.
lst is not sorted.

Example:
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
*/


// Solution

function maxDiff(list) {
  if(!list.length) return 0;
  return Math.max(...list) - Math.min(...list);
}

// or

function maxDiff(list) {
  let smallestValue = Infinity;
  let biggestValue = -Infinity;
  if(list.length === 0) return 0;
  for (i=0; i < list.length; i++) {
    if(list[i] > biggestValue) {
      biggestValue = list[i];
    }
    if(list[i] < smallestValue) {
      smallestValue = list[i];
    }
  }
  return biggestValue - (smallestValue);
  
};