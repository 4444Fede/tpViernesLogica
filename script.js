function sum(number1, number2) {
  if (number2 !== undefined) {
    if (typeof number2 !== "number") {
      return "Second parameter is not a number";
    }
    return number1 + number2;
  }

  return function (number2) {
    if (typeof number2 !== "number") {
      return "Second parameter is not a number";
    }
    return number1 + number2;
  };
}

const a = `Messi`;
console.log(sum(1, 2));
console.log(sum(1)(2));
console.log(sum(1, a));
console.log(sum(1)(a));
