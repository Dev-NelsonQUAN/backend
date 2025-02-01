const details = [
  { name: "Laptop", price: 1500 },
  { name: "Phone", price: 700 },
  { name: "Tablet", price: 300 },
  { name: "Monitor", price: 400 },
  { name: "Phone", price: 800 },
];

const addPrice = details.reduce((e, i) => e + i.price, 0);
console.log(addPrice);

const filterName = details.filter((e) => {
    return e.name.toLowerCase() === "tablet";
});

console.log(filterName)

const filterNameReg = details.filter((e, i) => {
    return e.name === 'Laptop' || e.price === 400
}) 

console.log(filterNameReg)

const sortDetailsInDescending = details.sort((a, b) => {
    return b.price - a.price
})

console.log(sortDetailsInDescending)

// const performForEachOnDetails = details.forEach((e, i) => {
//     return e.price + 2
// })

// console.log(performForEachOnDetails)

const addNewStatusToDetails = details.map((e, i) => {
    return {...e, status: e.price + 2}
})

console.log(addNewStatusToDetails)

const addNewDifferentStat = details.map((e, i) => {
    return {...e, statistics: e.name === "Phone" ? "Pending" : 'Withdrawn' }
})

console.log(addNewDifferentStat)

const otherDetails = [
  { type: "deposit", amount: 1000 },
  { type: "withdrawal", amount: 500 },
  { type: "deposit", amount: 1200 },
  { type: "withdrawal", amount: 300 },
  { type: "deposit", amount: 400 },
  { type: "withdrawal", amount: 700 },
];
