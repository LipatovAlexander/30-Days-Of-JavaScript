console.group("Level 1");

const challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3, 7));
console.log(challenge.substring(3));
console.log(challenge.includes("Script"));
console.log(challenge.split(""));
console.log(challenge.split(" "));
const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(", "));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
const sentence =
  "You cannot end a sentence with because because because is a conjunction";
const searchString = "because";
console.log(sentence.indexOf(searchString));
console.log(sentence.lastIndexOf(searchString));
console.log(sentence.search(searchString));
const challengeWithTrailingWhitespace = " 30 Days Of JavaScript ";
console.log(challengeWithTrailingWhitespace.trim());
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("Script"));
console.log(challenge.match(/a/g));
console.log("30 Days Of".concat(" ", "JavaScript"));
console.log(challenge.repeat(2));

console.groupEnd();
