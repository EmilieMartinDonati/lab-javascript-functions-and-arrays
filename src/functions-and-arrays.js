const { array } = require('yargs');

// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(arraytest) {
  if (arraytest.length === 0) {
    return null;
  } else {
    let etalon = arraytest[0];

    for (let i = 1; i < arraytest.length; i++) {
      if (arraytest[i].length > etalon.length) {
        etalon = arraytest[i];
      }
    }
    return etalon;
  }
}

console.log(findLongestWord(words));

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(param) {
  let count = 0;

  function summ(a, b) {
    return a + b;
  }

  if (!param.length) return 0;
  else if (param.length === 1) {
    count = param[0];
  } else {
    for (let i = 0; i < param.length; i++) {
      count += param[i];
    }
  }
  return count;
}

console.log(sumNumbers(numbers));

// Iteration #3.1 Bonus:
function sum(arrToAdd) {

  let calcul = 0;

  if (!arrToAdd.length) return 0;

  else {

  function converter (aMixedArray) {
    for (let i = 0 ; i < aMixedArray.length ; i++) {

      if (typeof aMixedArray[i] === 'string') {
        aMixedArray[i] = aMixedArray[i].length;
      }
      if (aMixedArray[i] === true) {
        aMixedArray[i] = 1;
        }
      if (aMixedArray[i] === false) {
          aMixedArray[i] = 0;
        }
      if (typeof aMixedArray[i] === 'number' ) {
          aMixedArray[i] = aMixedArray[i];
      }
    }
  }
  converter(arrToAdd);

  for (let j = 0 ; j < arrToAdd.length ; j++) {
    calcul += arrToAdd[j];

  }
  return calcul;
  }
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arg) {
  let total = 0;
  let averageOf;

  if (!arg.length) return null;
  else {
    for (let i = 0; i < arg.length; i++) {
      total += arg[i];
    }
  }
  averageOf = total / arg.length;
  return averageOf;
}

console.log(averageNumbers(numbersAvg));

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arrayStr) {
  let averageOfStr;
  let totalLetters = 0;

  if (!arrayStr.length) return null;
  else {
    for (let i = 0; i < arrayStr.length; i++) {
      totalLetters += arrayStr[i].length;
    }
  }
  averageOfStr = totalLetters / arrayStr.length;
  return averageOfStr;
}

console.log(averageWordLength(wordsArr));

// Bonus - Iteration #4.1

//Mes crash test fonctionnent, l'unit testing non.

const crashTestArray = ["ça", false, "ne", "marche", "pas", 1, true];

const crashTest2 = [1, 2, 5, 7];

function avg(anArrayAgain) {

  if (!anArrayAgain.length) return null;

else {

 function convertisseur (aMixArray) {
  for (let i = 0 ; i < aMixArray.length ; i++) {

    if (typeof aMixArray[i] === 'string') {
      aMixArray[i] = aMixArray[i].length;
    }
    if (aMixArray[i] === true) {
      aMixArray[i] = Number(true);
      }
    if (aMixArray[i] === false) {
        aMixArray[i] = Number(false);
      }
    // if (typeof aMixArray[i] === 'number' ) {
    //     aMixArray[i] = aMixArray[i];
    // }
  }
}

convertisseur(anArrayAgain);

// console.log(anArrayAgain);

let somme = 0;

let averageSomme;

for (let j = 0; j < anArrayAgain.length ; j ++) {
  somme = somme + anArrayAgain[j];
}
averageSomme = somme / anArrayAgain.length;
return averageSomme;
}
}

console.log(avg(crashTestArray));

console.log(avg(crashTest2));


// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

const personalCrashTest = [
  'butter',
  'butter',
  'butter',
  'butter',
  'butter',
  'butter',
  'butter'
];

function uniquifyArray (arrTC) {

  let nouvelArray = [];

  if (!arrTC.length) return null;

  else {

  arrTC.sort();
  
  nouvelArray.push(arrTC[0])

  for (let i = 1 ; i < arrTC.length ; i ++) {
    if (nouvelArray.indexOf(arrTC[i]) > -1 === false) {
      nouvelArray.unshift(arrTC[i])
    }
  }
  console.log("------FIRST TRY uniquified array-------")
  console.log(nouvelArray);
  }

}

//Test unit doesn't work but manual testing in console does?

uniquifyArray(wordsUnique);

uniquifyArray(personalCrashTest); 
 

function uniquifyArrayTest (arrTC) {

  if (!arrTC.length) return null;

  else {

  arrTC.sort();

  for (let i = 1 ; i < arrTC.length ; i ++) {
      if (arrTC[i] === arrTC[i - 1] && arrTC[i] !== arrTC[i + 1]) {
         arrTC.splice(i - 1, 1);
      }
      if (arrTC[i] === arrTC[i - 1] && arrTC[i] === arrTC[i + 1]) {
        arrTC.splice(i - 1, 1, "");
      }
  }
}
    console.log("------SECOND TRY uniquified array ------")
    console.log(arrTC);
  }

uniquifyArrayTest(wordsUnique);

uniquifyArrayTest(personalCrashTest); // Still have the same problem but with boolean instead.


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arrToFind, gold) {
 isGold = false;

 if (!arrToFind.length) return null;

 else {

 for (let i = 0 ; i < arrToFind.length ; i ++) {
   if (arrToFind[i] === gold) {
     isGold = true;
   }
 }
}
 return isGold;
}

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(arrToCount, wordToSearch) {

  times = 0;
  for (let i = 0 ; i < arrToCount.length ; i ++) {
    if (arrToCount[i] === wordToSearch) {
      times += 1;
    }
  }
  return times;
}

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(someMatrix) {

  let product = someMatrix[0][0] * someMatrix[0][1] * someMatrix[0][2] * someMatrix[0][3]

  console.log(product)

}

greatestProduct(matrix);

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
