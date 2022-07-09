console.group("Level 2");

console.groupCollapsed("Task 1");

const base = +prompt("Enter base:", 20);
const height = +prompt("Enter height:", 10);
const areaOfTriangle = 0.5 * base * height;
console.log("The area of the triangle is", areaOfTriangle);

console.groupEnd();

console.groupCollapsed("Task 2");

const sideA = +prompt("Enter side a:", 5);
const sideB = +prompt("Enter side b:", 4);
const sideC = +prompt("Enter side c:", 3);
const perimeterOfTriangle = sideA + sideB + sideC;
console.log("The perimeter of the triangle is", perimeterOfTriangle);

console.groupEnd();

console.groupCollapsed("Task 3");

const length = +prompt("Enter length:", 5);
const width = +prompt("Enter width:", 4);
const areaOfRectangle = length * width;
const perimeterOfRectangle = 2 * (length + width);
console.log("The area of the rectangle is", areaOfRectangle);
console.log("The perimeter of the rectangle is", perimeterOfRectangle);

console.groupEnd();

console.groupCollapsed("Task 4");

const radius = +prompt("Enter radius:", 10);
const pi = 3.14;
const areaOfCircle = pi * radius * radius;
const circumference = 2 * pi * radius;
console.log("The area of the circle is", areaOfCircle);
console.log("The circumference is", circumference);

console.groupEnd();

// Skip tasks 5 - 8

console.groupCollapsed("Task 9");

const workingHours = +prompt("Enter hours:", 40);
const ratePerHour = +prompt("Enter rate per hour:", 28);
const pay = workingHours * ratePerHour;
console.log("Your weekly earning is", pay);

console.groupEnd();

console.groupCollapsed("Task 10");

const message = `Your name is ${firstName.length > 7 ? "long" : "short"}`;
console.log(message);

console.groupEnd();

console.groupCollapsed("Task 11");

const message2 = `Your first name, ${firstName} is ${
  firstName.length > lastName.length ? "longer" : "shorter"
} than your family name, ${lastName}`;
console.log(message2);

console.groupEnd();

console.groupCollapsed("Task 12");

const myAge = 250;
const yourAge = 25;
console.log(
  "I am",
  Math.abs(myAge - yourAge),
  "years",
  myAge > yourAge ? "older" : "younger",
  "than you."
);

console.groupEnd();

console.groupCollapsed("Task 13");

const birthYear = +prompt("Enter birth year:", 2002);
const driverAge = now.getFullYear() - birthYear;
const isAllowedToDrive = driverAge >= 18;
const drivingMessage = isAllowedToDrive
  ? "You are old enough to drive"
  : `You will be allowed to drive after ${18 - driverAge} years`;
console.log(`You are ${driverAge}. ${drivingMessage}.`);

console.groupEnd();

console.groupCollapsed("Task 14");

const numberOfYears = +prompt("Enter number of years you live:", 100);
const livedSeconds = numberOfYears * 365 * 24 * 60 * 60;
console.log(`You lived ${livedSeconds} seconds.`);

console.groupEnd();

console.groupCollapsed("Task 15");

const fullYear = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

console.log(
  "YYYY-MM-DD HH:mm",
  `${fullYear}-${month}-${date} ${hours}:${minutes}`
);
console.log(
  "DD-MM-YYYY HH:mm",
  `${date}-${month}-${fullYear} ${hours}:${minutes}`
);
console.log(
  "DD/MM/YYYY HH:mm",
  `${date}/${month}/${fullYear} ${hours}:${minutes}`
);

console.groupEnd();

console.groupEnd();
