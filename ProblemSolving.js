// Task 1 : Create a function that takes a string as input and returns 
// the reversed version of the string without using the built-in reverse() method. 

function reverseString(input) {
  let reversed = '';
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }
  return reversed;
}

const reversString = "hello world";
const reversedString = reverseString(reversString);
console.log(reversedString);

// Task 2 : Create a function that takes an array of number
// s as input and returns the sum of all positive numbers in the array. 
// Example Input: [2, -5, 10, -3, 7]


function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
  
  const sumArry = [2, -5, 10, -3, 7];
  const sumResult = sumOfPositiveNumbers(sumArry);
  console.log(sumResult); 


//   Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function findMostFrequentElement(arr) {
    const frequencyMap = {};
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    }
  
   
    let mostFrequentElement;
    let highestFrequency = 0;
  
    for (const element in frequencyMap) {
      if (frequencyMap[element] > highestFrequency) {
        highestFrequency = frequencyMap[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  }
  
 
  const findArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const findResult = findMostFrequentElement(findArray);
  console.log(findResult); 
  
  
//   Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

function findTwoNumbersForSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return null;
  }
  
  
  const inputArray = [1, 3, 6, 8, 11, 15];
  const targetValue = 9;
  const result = findTwoNumbersForSum(inputArray, targetValue);
  console.log(result); 
  



 
