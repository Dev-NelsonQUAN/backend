const math = (a, b, sign) => {
  if (sign === "+") {
    return a + b;
  } else if (sign === "-") {
    return a - b;
  } else if (sign === "*") {
    return a * b;
  } else if (sign === "/.") {
    return a / b;
  } else {
    return " This is not an operator";
  }
};

module.exports =  math
