const array1 = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"];
const array2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];

// create function that return the difference between two arrays
function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter((v) => !arr1.includes(v) || !arr2.includes(v));
}
console.log("result: ", diffArray(array1, array2));
