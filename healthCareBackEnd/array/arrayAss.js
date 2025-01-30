// Assignment: Working with Array Methods and Loops
// 1. For Loop & Reduce (Combination)
//  You have an array of student scores:
//  const scores = [80, 95, 78, 88, 92, 67, 75, 89, 100, 55];
// o Use a for loop to find the highest score in the array.
// o Use reduce to find the total sum of all scores and calculate the average.

// Assignment on ForLoop and Reduce
const scores = [80, 95, 78, 88, 92, 67, 75, 89, 100, 55];
let total = 0;
let num = scores.length;

console.log("Answer 1a");

for (let index = 0; index < num; index++) {
  total += scores[index];
}

console.log(total / num);

//Reduce
let totalSum = scores.reduce((initial, acc) => {
  return initial + acc / scores.length;
}, 0);

console.log("Answer 1b");
console.log(totalSum);

// 2. Reduce & Map (Advanced Transformation)
//  Given an array of products:
//  const products = [
//  { name: "Laptop", price: 1500 },
//  { name: "Phone", price: 700 },
//  { name: "Tablet", price: 300 },
//  { name: "Monitor", price: 400 },
//  ];
// o Use reduce to calculate the total cost of all products.
// o Use map to create a new array that adds a "discountedPrice" field to each
// product, where the discount is 10% off the original price.

// Assignment Two
const products = [
  { name: "Laptop", price: 1500 },
  { name: "Phone", price: 700 },
  { name: "Tablet", price: 300 },
  { name: "Monitor", price: 400 },
];

const totalCost = products.reduce((a, b) => {
  return a + b.price;
}, 0);

console.log("Answer 2a");
console.log(totalCost);

const discountedPriceHandle = products.map((e) => {
  return { ...e, discountedPrice: e.price * 10 };
});

// assignment Two
console.log(discountedPriceHandle);
// const addPricesToArr = products.forEach((priceAdd, i, arr) => {
//   return (priceAdd.discountPrice = discountedPriceHandle[i]);
// //   return (priceAdd.discountPrice = discountedPriceHandle[i]);
// });

// console.log(discountedPriceHandle);
// console.log(products);

// 3. ForEach & Map (String Manipulation)
//  Given an array of people's full names:
//  const names = ["john doe", "jane smith", "alice wonderland", "bob
// builder"];
// o Use map to return an array where each name is properly capitalized (e.g., "John
// Doe").
// o Use forEach to log each person's initials (e.g., "JD" for "John Doe").

//Assignment Three
const names = ["john doe", "jane smith", "alice wonderland", "bob builder"];
const capitalizeAllNames = names.map((e, i) => {
  return e.toUpperCase();
});

console.log(capitalizeAllNames);

const capitalizeNames = capitalizeAllNames.map((e) => {
  const splitNames = e.split(" ");
  // console.log(splitNames)
  return splitNames[0][0] + splitNames[1][0];
});
console.log("Ans Three");
console.log(capitalizeNames);

// const capitalizeInitials = capitalizeAllNames.forEach((e) => {
//   return e.indexOf[1];
// });

// console.log(capitalizeInitials);

// 4. Filter & Sort (Complex Filtering & Sorting)
//  Given an array of employees:
//  const employees = [
//  { name: "Michael", age: 45, salary: 5000 },
//  { name: "Sarah", age: 30, salary: 7000 },
//  { name: "David", age: 25, salary: 4500 },
//  { name: "Emily", age: 28, salary: 5500 },
//  { name: "John", age: 35, salary: 6000 },
//  ];
// o Use filter to get employees who earn more than 5000.
// o Use filter to get employees younger than 30.

//Assignment Four
const employees = [
  { name: "Michael", age: 45, salary: 5000 },
  { name: "Sarah", age: 30, salary: 7000 },
  { name: "David", age: 25, salary: 4500 },
  { name: "Emily", age: 28, salary: 5500 },
  { name: "John", age: 35, salary: 6000 },
];

const employeesWhoEarnsMoreThanFiveThousand = employees.filter((e) => {
  return e.salary > 5000;
});

console.log("Answer 4a");
console.log(employeesWhoEarnsMoreThanFiveThousand);
// console.log(employeesWhoEarnsMoreThanFiveThousand.[]);

const getEmployeesYoungerThanThirty = employees.filter((e) => e.age < 30);
console.log("Answer 4b");
console.log(getEmployeesYoungerThanThirty);

const sortSalaryInDescendingOrder = employees.sort((a, b) => {
  return b.salary - a.salary;
});

console.log("Answer 4c");
console.log(sortSalaryInDescendingOrder);

// Combination Challenge (Real-Life Example)
//  You are given a list of transactions in a bank account:
//  const transactions = [
//  { type: "deposit", amount: 1000 },
//  { type: "withdrawal", amount: 500 },
//  { type: "deposit", amount: 1200 },
//  { type: "withdrawal", amount: 300 },
//  { type: "deposit", amount: 400 },
//  { type: "withdrawal", amount: 700 },
//  ];
// o Use reduce to find the total balance (start from 0).
// o Use filter to get all deposit transactions.
// o Use map to create a new array that includes each transaction but adds a "status"
// field that shows "completed" for deposits and "pending" for withdrawals.

const transactions = [
  { type: "deposit", amount: 1000 },
  { type: "withdrawal", amount: 500 },
  { type: "deposit", amount: 1200 },
  { type: "withdrawal", amount: 300 },
  { type: "deposit", amount: 400 },
  { type: "withdrawal", amount: 700 },
];

const totalBalance = transactions.reduce((e, i) => e + i.amount, 0);
console.log("Answer 5a");
console.log(totalBalance);

const getAllDepositsTrans = transactions.filter((e, i) => {
  return e.type === "deposit";
});

console.log("Answer 5b")
console.log(getAllDepositsTrans);

const addFieldToTrans = transactions.map((e, i) => {
    
    // if (e.type === "withdrawal") {
    //     return { ...transactions, start };
    //   return start = `status: pending`
    // } else if (e.type === "deposit") {
    //     return start = `status: pending`
    //     status: "completed";
    // } else {
        //     // status: "none";
    //     return start = `status: pending`
    // };
    
    return {...e, status: e.type === 'deposit' ? "completed" : "withdrawal"}
});

console.log("Answer 5b")
console.log(addFieldToTrans);
