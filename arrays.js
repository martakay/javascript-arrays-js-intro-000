var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

 // Both functions take two parameters, an array and an element to add to the
 // beginning of the array, and both functions should add the element to the
 // beginning of the array and then return the whole array.

function addElementToBeginningOfArray(array, elementToAdd) {
//should return a new array and not modify the original
  return array = [elementToAdd, ...array]

}

function destructivelyAddElementToBeginningOfArray(array, elementToAdd) {
//should alter the original array that's passed in
  array.unshift(elementToAdd);
  return array;
}

function addElementToEndOfArray(array, elementToAdd) {
  // should not alter original array
  return array = [...array, elementToAdd]
}

function destructivelyAddElementToEndOfArray(array, elementToAdd) {
  // should alter the original array
  array.push(element);
  return array;
}
