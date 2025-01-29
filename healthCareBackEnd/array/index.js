// for Loop

const num = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < num.length; i++) {
  // console.log(num[i])
  // console.log(num)
  sum += num[i];
}
console.log(sum);

//reduce
const add = num.reduce((initialValue, acc) => {
  return initialValue + acc;
});

console.log(add);

// console.log("Reduce")

const obj = [
  {
    name: "Alice Nelson",
    age: 28,
    accountBalance: 3,
    isMarried: true,
    hobbies: ["Swimming", "Coding", "Driving"],
  },
  {
    name: "Boluwatife Muhammed",
    age: 48,
    accountBalance: 1,
    isMarried: false,
    hobbies: ["Looking", "Sewing", "Driving"],
  },
];

// console.log(obj[0].hobbies[1])

const addArr = obj.reduce((a, b) => {
  return a + b.accountBalance;
}, 0);
console.log(addArr);

// map
const arr = ["Sanni", "Nelson", "Babtunde", "Secter"];
console.log(
  arr.map((i) => {
    return i.toUpperCase();
  })
);

console.log(
  arr.map((e, i) => {
    return i;
  })
);

//for Each
arr.forEach((e) => {
  console.log(e.toUpperCase());
});

//filter
const getIsMarried = obj.filter((e) => {
  return e.isMarried === true;
});

console.log(getIsMarried);

const filterNum = arr.filter((e) => {
  return e.includes("n");
});

console.log(filterNum);

const greaterThanTwo = num.filter((e) => {
  return e > 2;
});

console.log(greaterThanTwo);

const pickHobbies = obj.filter((e) => {
  e.hobbies === "driving";
});

console.log(pickHobbies);
