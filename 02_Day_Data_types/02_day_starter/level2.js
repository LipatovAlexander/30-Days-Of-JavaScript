console.group("Level 2");

const statement =
  "The quote 'There is no exercise better for the heart than reaching down and \
lifting people up.' by John Holmes teaches us to help one another.";
console.log(statement);

const quote = `"Love is not patronizing and charity isn't about pity, it is about love. Charity \
and love are the same -- with charity you give love, so don't just give money \
but reach out your hand instead."`;
console.log(quote);

console.log(typeof "10" === typeof 10); // false
console.log(typeof +"10" === typeof 10); // true

console.log(parseFloat("9.8")); // 9.8
console.log(Math.ceil(parseFloat("9.8"))); // 10

console.log("python".includes("on"));
console.log("jargon".includes("on"));

const jargonSentence = "I hope this course is not full of jargon.";
console.log(jargonSentence.includes("jargon"));

const r0_100 = Math.floor(Math.random() * 101);
console.log(r0_100);

const r50_100 = Math.floor(Math.random() * 51) + 50;
console.log(r50_100);

const string = "JavaScript";
const randomIndex = Math.floor(Math.random() * string.length);
console.log(string[randomIndex]);

const pattern =
  "\
1 1 1 1 1\n\
2 1 2 4 8\n\
3 1 3 9 27\n\
4 1 4 16 64\n\
5 1 5 25 125\n";
console.log(pattern);

const from = sentence.indexOf(searchString);
const to = sentence.lastIndexOf(searchString) + searchString.length;
const length = to - from;
console.log(sentence.substr(from, length));

console.groupEnd();
