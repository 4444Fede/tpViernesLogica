// 1) Escribir una funcion que cumpla con los siguientes casos de prueba:
// sum(1,2) => 3
// sum(1)(2) => 3
// sum(1,a) => “second parameter is not a number”
// sum(1)(a) => “second parameter is not a number”

console.log("");
console.log("Exercise 1");
console.log("");

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

// 2) Dada una lista de usuarios con su historial de logueo. Escribir una funcion que determine si algun usuario fue logueado dentro de los ultimos 30 minutos
//  La funcion debe recibir un parametro:
//    - `users`: un array de objetos, donde cada objeto tiene las siguientes propiedades:
//      - `id` (integer)
//      - `login_time` (datetime): tiempo en el cual el usuario se logueo por ultima vez en formato fecha
// La funcion debe retornar true si un usuario se logueo en los ultimos 30 minutos

console.log("");
console.log("Exercise 2");
console.log("");

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

// 3) Escribir una funcion que determine si 2 strings son un anagrama
// Ignorar espacios en los strings
// No diferenciar entre mayusculas y minusculas
// Retornar true si es anagrama y false de lo contrario

console.log("");
console.log("Exercise 3");
console.log("");

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

// 4) Escribir una funcion generadora de una contraseña segura. Debe recibir un numero y generar una contraseña de esa longitud que cumpla con las siguientes consignas:
// Al menos una mayuscula
// Al menos una minuscula
// Al menos un numero
// Al menos un caracter especial
// Debe retornar la contraseña generada

console.log("");
console.log("Exercise 4");
console.log("");

function generateSecurePassword(length) {
  if (length < 4) {
    return "Password length must be at least 4 characters.";
  }

  const upperCaseLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const lowerCaseLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const specialCharacters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "{",
    "}",
    "[",
    "]",
    ":",
    ";",
    '"',
    "'",
    "<",
    ">",
    ",",
    ".",
    "?",
    "/",
    "|",
    "~",
    "`",
  ];

  const allCharacters = [
    ...upperCaseLetters,
    ...lowerCaseLetters,
    ...numbers,
    ...specialCharacters,
  ];

  const passwordArray = [];

  passwordArray.push(
    upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
  );
  passwordArray.push(
    lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
  );
  passwordArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
  passwordArray.push(
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  );

  for (let i = 4; i < length; i++) {
    passwordArray.push(
      allCharacters[Math.floor(Math.random() * allCharacters.length)]
    );
  }

  const shufflePassword = (password) => {
    for (let i = password.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      let temporary = password[i];
      password[i] = password[rand];
      password[rand] = temporary;
    }
    return password;
  };

  const shuffledPassword = shufflePassword(passwordArray);

  const passwordToString = (password) => {
    let strPassword = "";
    for (let i = 0; i < password.length; i++) {
      strPassword += password[i];
    }
    return strPassword;
  };

  return passwordToString(shuffledPassword);
}

console.log(generateSecurePassword(4));
console.log(generateSecurePassword(-15));
console.log(generateSecurePassword(100));
console.log(generateSecurePassword(13));
