console.group("Level 1");

console.groupCollapsed("Task 1");

let firstName = "Alexander";
let lastName = "Lipatov";
let country = "Russia";
let city = "Kazan";
let age = 20;
let isMarried = false;
let year = 2022;
console.log("Type of firstName:", typeof firstName);
console.log("Type of lastName:", typeof lastName);
console.log("Type of country:", typeof country);
console.log("Type of city:", typeof city);
console.log("Type of age:", typeof age);
console.log("Type of isMarried:", typeof isMarried);
console.log("Type of year:", typeof year);

console.groupEnd();

console.groupCollapsed("Task 2");

console.log("Type of '10' is equal to 10:", typeof "10" === typeof 10);

console.groupEnd();

console.groupCollapsed("Task 3");

console.log("parseInt('9.8') === 10:", parseInt("9.8") === 10);

console.groupEnd();

console.groupCollapsed("Task 4");

console.group("Subtask 1");

console.log("Non-zero number:", !!1);
console.log("Non-empty string:", !!"string");
console.log("Boolean true:", true);
console.groupEnd();
console.group("Subtask 2");
console.log("Zero number:", !!0);
console.log("Empty string:", !!"");
console.log("Boolean false:", false);
console.groupEnd();

console.groupEnd();

console.groupCollapsed("Task 5");

console.log("(4 > 3) === true:", 4 > 3 === true);
console.log("(4 >= 3) === true:", 4 >= 3 === true);
console.log("(4 < 3) === false:", 4 < 3 === false);
console.log("(4 <= 3) === false:", 4 <= 3 === false);
console.log("(4 == 4) === true:", (4 == 4) === true);
console.log("(4 === 4) === true:", (4 === 4) === true);
console.log("(4 != 4) === false:", (4 != 4) === false);
console.log("(4 !== 4) === false:", (4 !== 4) === false);
console.log("(4 != '4') === false:", (4 != "4") === false);
console.log("(4 == '4') === true:", (4 == "4") === true);
console.log("(4 === '4') === false:", (4 === "4") === false);
console.log(
  "'python'.length !== 'jargon'.length:",
  "python".length !== "jargon".length
);

console.groupEnd();

console.groupCollapsed("Task 6");

console.log("(4 > 3 && 10 < 12) === true:", (4 > 3 && 10 < 12) === true);
console.log("(4 > 3 && 10 > 12) === false:", (4 > 3 && 10 > 12) === false);
console.log("(4 > 3 || 10 < 12) === true:", (4 > 3 || 10 < 12) === true);
console.log("(4 > 3 || 10 > 12) === true:", (4 > 3 || 10 > 12) === true);
console.log("(!(4 > 3)) === false:", !(4 > 3) === false);
console.log("(!(4 < 3)) === true:", !(4 < 3) === true);
console.log("(!false) === true:", !false === true);
console.log("(!(4 > 3 && 10 < 12)) === false:", !(4 > 3 && 10 < 12) === false);
console.log("(!(4 > 3 && 10 > 12)) === true:", !(4 > 3 && 10 > 12) === true);
console.log("(!(4 === '4')) === true:", !(4 === "4") === true);
console.log(
  "!'dragon'.includes('on') && !'python'.includes('on')",
  !"dragon".includes("on") && !"python".includes("on")
);

console.groupEnd();

console.groupCollapsed("Task 7");

const now = new Date();
console.log("Year:", now.getFullYear());
console.log("Month as number:", now.getMonth());
console.log("Date:", now.getDate());
console.log("Day as number:", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("UNIX time:", now.getTime());

console.groupEnd();

console.groupEnd();
