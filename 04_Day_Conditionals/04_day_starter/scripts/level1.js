console.group("Level 1");

const age = +prompt("Enter your age:");
if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  const yearsLeftToDrive = 18 - age;
  console.log(`You are left with ${yearsLeftToDrive} years to drive.`);
}

const myAge = +prompt("Enter my age:");
const yourAge = +prompt("Enter your age:");
const absDiff = Math.abs(myAge - yourAge);
if (myAge > yourAge) {
  console.log(`I am ${absDiff} years older than you.`);
} else if (yourAge > myAge) {
  console.log(`You are ${absDiff} years older than me.`);
} else {
  console.log("We are the same age.");
}

const a = 4;
const b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`);

const number = +prompt("Enter a number:");
if (number % 2 == 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}

console.groupEnd();
