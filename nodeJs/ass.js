// const fibonacci = (n) => {
//   let a = 0;
//   let b = 1;
//   let arr = [];

//   for (let index = 2; index <= n; index++) {
//     c = a + b;
//     a = b;
//     b = c;
//     arr.push(c);
//   }
//   return arr;
// };

// console.log(fibonacci(8));

// function isPalindrome(word) {
//   let holdString = "";

//   for (let index = word.length - 1; index >= 0; index--) {
//     holdString += word[index];
//   }

//   if (holdString == word) {
//     return "This is a Palindrome";
//   } else {
//     return "This is a Palindrome";
//   }
// }

// let word = "civic";
// console.log(isPalindrome(word));

// function Factorial(num) {
//   if (num < 0) return undefined;
//   let factor = 1;

//   for (let index = num; index > 0; index--) {
//     factor *= index;
//   }
//   return factor;
// }

// console.log(Factorial(5));

// function bblSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     //Last elements are already in place
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       //checking if the item at present iteration
//       //is Greater than the next iteration
//       if (arr[j] > arr[j + 1]) {
//         //If the condition  is treu
//         //then swaps 'em.
//         let temp = arr[j];

//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   console.log(arr);
// }

// let arr = [123, 45, 7, 85, 99, -1, -15];
// console.log(bblSort(arr));

// const bbleSort = (seq) => {
//   for (let index = 0; index < seq.length; index++) {
//     for (let k = 1; k < seq.length; k++) {
//       if (seq[k] < seq[k - 1]) {
//         let temz = seq[k];

//         seq[k] = seq[k - 1];
//         seq[k - 1] = temz;
//       }
//     }
//   }
// };

// let allArray = [2, 4, 6, 8, 9, -1, 0, 0];
// bbleSort(allArray)
// console.log(allArray)
// // function bubbleSort(array) {
// //   let sortedArray = array.length;
// //   let isSwapped;

// //   for (let index = 0; index < sortedArray; index++) {
// //     isSwapped = false;

// //     for (let sArr = 0; sArr < sortedArray - index - 1; sArr++) {
// //       if (array[sArr] > array[sArr + 1]) {
// //         //Swap Elements

// //         [array[sArr], array[sArr + 1]] = [array[sArr + 1], array[sArr]];
// //         isSwapped = true;
// //       }
// //     }
// //     //If no two elements were sorted, array remaoins the same.
// //     if (!isSwapped) break;
// //   }

// //   return array;
// // }

// // console.log(bubbleSort([22, 44, 13, 53, 65, 75, 4040, -16]));

// function bSort(arrs) {
//   // let stringify = "";

//   for (let index = 0; index < 2; index++) {
//     // console.log(arrs[index]);
//   }

//   return arrs;
// }
// let arrs = [2, 4, -3, 10, -2];

// console.log(bSort(arrs));

function theArrayAdd(it, space) {
  let addArr = [];

  for (let i = 0; i < it.length; i++) {
    // console.log(addArr)
    if (it[i] % 1 === 0 && it[i] % 2 === 0) {
      addArr += it[i] * it[i] + space;
    } else {
      console.log(false);
      // return false
    }
  }

  return addArr;
}

let it = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(theArrayAdd(it, " "));

const deductFunction = (arrNum, sep) => {
  let afterArray = [];

  for (let i = 0; i < arrNum.length; i++) {
    afterArray += arrNum[i - 1] - arrNum[i] + sep;
    // console.log(afterArray)
  }
  return afterArray;
};

let arrNum = [3, 5, 6, 0, 4, 0];
console.log(deductFunction(arrNum, " "));

function bringEvenNumbers(initArr, spa) {
  let allNumArr = [];
  for (i = 0; i < initArr.length; i++) {
    if (initArr[i] % 2 === 0) {
      allNumArr += initArr[i] + spa;
    }
    // else {
    //   return false
    // }
  }
  return allNumArr;
}

let allNumArr = [2, 5, 6, 87, 9, 0, 6, 2, 4, 6, 8, 9];
console.log(bringEvenNumbers(allNumArr, " "));

const fibonac = function (greet, operate) {
  let ozebaArr = [0, 1];

  for (i = 2; i < greet.length; i++) {
    ozebaArr += greet[i - 1] + greet[i - 2] + operate;
    // console.log(ozebaArr);
  }
  return ozebaArr;
};

// let greet = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(fibonac(greet, ", "));

// const hisFibonacci = function (range) {
//   let first = 0;
//   let second = 1;
//   let process = [];

//   for (i = 2; i <= range; i++) {
//     third = first + second;
//     first = second;
//     second = third;

//     process.push(third);
//   }
//   return process;
// };

// console.log(hisFibonacci(8));

// function ourFibobnacci(input) {
//   let one = 0;
//   let two = 1;
//   let three = [];

//   for (i = 2; i < input; i++) {
//     four = one + two;
//     one = two;
//     two = four;

//     three.push(four);
//   }
//   return three;
// }

// console.log(ourFibobnacci(9));

// function chooseOdd(sect, spaceBar) {
//   let pele = [];

//   for (i = 0; i < sect.length; i++) {
//     if (sect[i] % 2 === 1) {
//       pele += sect[i] + spaceBar;
//     }
//   }

//   return pele;
// }

// let ion = [3, 4, 8, 12, 60, 80, 45];
// console.log(chooseOdd(ion, " "));

// function pickTwos(pickEm) {
//   let pick = [];

//   for (i = 0; i < pickEm.length; i++) {
//     if (pickEm[i] === 2) {
//       pick += pickEm[i];
//     }
//   }
//   return pick;
// }

// let pickEm = [2, 5, 7, 7, 78, 2, 6, 2, 7, 5];
// console.log(pickTwos(pickEm));

// let num = 2;
// let newNum = num++;
// console.log(num);
// console.log(newNum);
// console.log(num && newNum);
// console.log(newNum && num);

let num2 = 5;
let newNum2 = ++num2;
console.log(num2);
console.log(newNum2);
console.log(num2 && newNum2);
console.log(newNum2 && num2);

let retro = (4) * (3 + (2 * 1));
console.log(retro)

function addTwosToAll(arrz, mid) {
  let drezArr = [];

  for(i = 0; i < arrz.length; i++) {
      drezArr += arrz[i] * 2 + mid; 
  }

  return drezArr;
} 

let arrz = [3,5,6,7,8,3,4];
console.log(addTwosToAll(arrz, " "))

// console.log(2 % 2);
// if (10 % 2 === 0) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// console.log(3 % 2);
