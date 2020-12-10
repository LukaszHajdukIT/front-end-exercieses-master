/* getArrayLength should return length of the given as a parameter array
* hint <T> is a generic type, for more details visit https://www.typescriptlang.org/docs/handbook/generics.html */
export function getArrayLength<T>(array: T[]): number {
  return array.length;
}

/* filerNumbersLessThan should return new array of numbers less than given number
*  for example with parameters [1,2,3,4,5] and 3 result should be [1,2] */
export function filerNumbersLessThan(array: number[], lessThan: number): number[] {
  const lessArray = array.filter(arrayItem => {
    return arrayItem < lessThan;
  })
  return lessArray;
}

/* filerNumbersBiggerThan should return new array of numbers bigger than given number
*  for example with parameters [1,2,3,4,5] and 3 result should be [4,5] */
export function filerNumbersBiggerThan(array: number[], biggerThan: number): number[] {
  const biggerArray = array.filter(arrayItem => {
    return arrayItem > biggerThan;
  })
  return biggerArray;
}

/* addToEachArrayItem should add given number to each array elem
* for example with parameters [1,2,3] and 3 the result should be [4,5,6]
* hint: use map */
export function addToEachArrayItem(array: number[], add: number): number[] {
 const addedArray = array.map(arrayItem =>{
   return (arrayItem + add);
 })
  return addedArray;
}

/* multiplyEachArrayItem should multiply by given number each array elem
* for example with parameters [1,2,3] and 3 the result should be [3,6,9]
* hint: use map */
export function multiplyEachArrayItem(array: number[], multiply: number): number[] {
  const multipliedArray = array.map(arrayItem => {
    return arrayItem * multiply
})
  return multipliedArray;
}

/* getSumOfAllArrayItems return sum of all array items
* for example with parameters [1,2,3,4] the result should be 10
* hint: use reduce */
export function getSumOfAllArrayItems(array: number[]): number{
  const sumArray = array.reduce(function(previousValue, currentValue){
    return previousValue + currentValue;
  });
  return sumArray;
}
