// // function myFunction(x) {
// //   console.log(x);
// // }

// // myFunction("Nelson");
// // myFunction("QUAN");

// // function sum(a, b) {
// //   return a + b;
// // }

// // console.log(sum(3, 5));
// // console.log(sum(6, 10));
// // console.log(sum(8, 7));

// const sumNumber = () => {};

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(
//   arr.map((x) => {
//     return x + 2;
//   })
// );

// console.log(
//   arr.filter((x) => {
//     x != 1;
//   })
// );

// console.log(
//   arr.filter((v) => {
//     v != 2;
//   })
// );

// for (let index = 0; index < arr.length - 5; index++) {
//   const element = arr[index];
//   console.log(element);
// }

// const fibonacci = (n) => {
//   let a = 0;
//   let b = 1;
//   let arr = [];

//   for (i = 2; i <= n; i++) {
//     c = a + b;
//     a = b;
//     b = c;

//     arr.push(c);
//   }

//   return arr;
// };
// console.log(fibonacci(8));

// const fibSequence = (n) => {
//   const fib = [0, 1];

//   for (i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }

//   return fib;
// };

// console.log(fibSequence(9).slice(2));

// const sect = [1, 2, 3, 4, 5, 6, 7];
// console.log(sect.toString());

// function toString(def = "") {
//   let names = ["This", "is", "kreezzyyyy!!!"];
//   let str = "";
//   for (let index = 0; index < names.length; index++) {
//     str += names[index] + def;
//   }
//   return str;
// }

// console.log(toString(" "));

const fibonacci = (n) => {
  let a = 0;
  let b = 1;
  let arr = [];

  for (i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;

    arr.push(c);
  }

  return arr;
};
console.log(fibonacci(8));

function isPalindrome(str) {
  let holdString = "";

  for (let index = str.length - 1; index >= 0; index--) {
    holdString = str[index];

    if (str === holdString) {
      return "It's a palindrome";
    } else {
      return "It's not a palindrome";
    }
  }
}

let str = "civic";
console.log(isPalindrome(str));

function factors(n) {
  if (n < 0) return undefined;
  let factor = 1;

  for (let index = n; index > 0; index--) {
    factor *= index;
  }
  return factor;
}

console.log(factors(3));

// function factors(n) {
//   if (n < 0) return undefined; // Factorial is not defined for negative numbers
//   let factor = 1; // Initialize the result variable

//   for (let index = n; index > 0; index--) { // Loop from n down to 1
//     factor *= index; // Multiply the current value of factor by index
//   }
//   return factor; // Return the computed factors
// }

// console.log(factors(3)); // Output: 6

// function factors(n) {
//   if (n < 0) return undefined; // Factorial is not defined for negative numbers
//   let factor = 1; // Initialize the result variable
//   // console.log(factor);

//   for (let index = n; index > 0; index--) {
//     // Loop from n down to 1
//     factor *= index; // Multiply the current value of factor by index
//   }
//   return factor; // Return the computed factors
// }

// console.log(factors(3));
// console.log(factors(5));
// console.log(factors(-1));
// }

// function factors(n) {
//   if (n < 0) return undefined;
//   let factor = 1;

//   for (let index = n; index > 0; index--) {
//     factor *= index;
//   }
//   return factor;
// }

// console.log(factors(3));
