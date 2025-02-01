let num = [3, 5, 7, 8, 9];
let string = "";

num.forEach(theFunction);

function theFunction(val) {
  return (string += val);
}

console.log(theFunction());

// const num = [3,5,7,8,9]
// const str = "";

// function myFunction(num)

const num1 = [4, 5, 6, 7, 8];
const num2 = num1.map(funct);

function funct(givenValue) {
  return givenValue * 2;
}

console.log(funct(num2));

function calc(width, height) {
  //   let width = 90;
  //   let height = 20;

  if (width > 0 && height > 0) {
    return height * width;
  }
  return 0;
}

console.log(calc(90, 20));
console.log(calc(-3, 20));

// function addOne(a, b){
//     // let b = a++

//     if (b > 0 && a > 0) {
//         return b
//     }
//     return false
// }

// console.log(addOne(2, a++))

// let a = 2;
// const b = a++;
// console.log(a, b)

let r = 2;
const s = r++;
console.log(r, s);

let re = 2;
const st = ++re;
console.log(re, st);

function xAss(x) {
  // let x = 2;
  x += 4;
  x -= 7;
  return x;
}

console.log(xAss(2));

// function rand() {
//   let random = Math.random();
//   console.log(random);

//   if (random > 0.5) {
//     return "greater";
//   } else {
//     return "lesser";
//   }
// }

// console.log(rand());

let x;
if (Math.random() > 0.5) {
  x = 1;
} else {
  x = 0;
}

console.log(Math.random(), x);

function ourFunction() {
  const initials = "Nelson";
  function init() {
    console.log(initials);
  }
  return init;
}

let anotherInit = ourFunction();
console.log(anotherInit());

console.log(eval(4 + 8));

function done() {
  function work(user, d = "") {
    // console.log("Hello" + user + d);
    let x = "Hello" + user + d;
    console.log(x);
  }
  work("Lover");
}
done(" ");

function famz() {
  function client(madam, d = "") {
    console.log(`Hello${madam}`);
  }
  client("Babe");
}

famz();

function longString(...arghhhh) {
  let amapiano = "";
  for (let i = 0; i < arghhhh.length; i++) {
    if (arghhhh[i].length > amapiano.length) {
      amapiano = arghhhh[i];
    }
  }
  return amapiano;
}

console.log(
  longString("l am Great", "Joy Comes in the morning", "Street is calling them")
);

function shortestWord(...words) {
  if (words.length === 0) return ""; // Handle case with no words

  let short = words[0]; // Initialize with the first word
  for (let i = 1; i < words.length; i++) {
    // Start from the second word
    if (words[i].length < short.length) {
      short = words[i];
    }
  }
  return short;
}

console.log(shortestWord("dirt", "tree", "it", "Man")); // Output: "it"

function square(num) {
  return num * num;
}

console.log(square(3))

// function shortestWord(...words) {

//   let short = "";
//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length < short.length) {
//       short = words[i];
//     }
//   }
//   return short;
// }

// console.log(shortestWord("dirt", "tree", "it", "Man"))
