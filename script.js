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

function hasLoggedInLast30Minutes(users) {
  const now = new Date();
  return users.some((user) => {
    const diff = (now - user.login_time) / 1000 / 60;
    return diff <= 30;
  });
}

const users = [
  {
    id: "1",
    login_time: new Date("2024-10-18T09:55:51.01"),
  },
  {
    id: "2",
    login_time: new Date("2024-10-18T09:30:51.01"),
  },
  {
    id: "3",
    login_time: new Date("2024-10-18T09:40:51.01"),
  },
  {
    id: "4",
    login_time: new Date("2024-10-18T10:30:31.01"),
  },
];

console.log(hasLoggedInLast30Minutes(users));
