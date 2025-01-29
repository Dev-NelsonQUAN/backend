let obj = {
  name: "Nelson",
  isStudent: true,
  favFood: ["Bread And Beans", "Yam and Egg", "Fried Rice"],
  familyName: "Ololade",
};

const { name, isStudent } = obj;

// console.log(x)
console.log(obj);

let prime = obj.name

//Extract Keys
console.log(Object.keys(obj))
// Extract Values
console.log(Object.values(obj))

module.exports = obj