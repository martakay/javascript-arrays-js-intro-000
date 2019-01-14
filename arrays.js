var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

 // Both functions take two parameters, an array and an element to add to the
 // beginning of the array, and both functions should add the element to the
 // beginning of the array and then return the whole array.

function addElementToBeginningOfArray(array, elementToAdd) {
//should return a new array and not modify the original
  var newArray = array.unshift(elementToAdd);
  return newArray;

}

function destructivelyAddElementToBeginningOfArray(array, elementToAdd) {
//should alter the original array that's passed in

  return array;
}
