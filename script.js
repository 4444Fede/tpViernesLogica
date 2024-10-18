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

function areAnagrams(str1, str2) {
  const deleteSpaces = (str) => {
    str.trim();
    let copyStr = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        continue;
      }
      copyStr += str[i];
    }
    return copyStr;
  };
  str1 = deleteSpaces(str1);
  str2 = deleteSpaces(str2);
  if (str1.length != str2.length) {
    return false;
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let equalsCount = 0;
  let anagramLength = str1.length;
  let str2Arr = str2.split("");
  for (let char of str1) {
    for (i = 0; i < str2Arr.length; i++) {
      if (char === str2Arr[i]) {
        console.log(str2Arr);
        str2Arr[i] = "";
        equalsCount++;
        console.log(str2Arr);
        break;
      }
    }
    if (equalsCount === anagramLength) {
      return true;
    }
  }
  return false;
}
console.log(areAnagrams("    Lis ten   ", "S i le nt    "));
console.log(areAnagrams("  Heal lo ", " Oliel h    "));
console.log(areAnagrams("A pple ", "   P le a    p "));
