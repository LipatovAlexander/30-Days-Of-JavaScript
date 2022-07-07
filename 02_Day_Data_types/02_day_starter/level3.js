console.group("Level 3");

const countSentence =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
const countWord = "love";
console.log(countSentence.toLowerCase().split(countWord).length - 1);

console.log(sentence.match(RegExp(searchString, "gi")).length);

const dirtySentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; \
&as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching \
m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a \
tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
const regexp = /[^\w ]+/g;
const cleanSentence = dirtySentence.replace(regexp, "");
const words = cleanSentence.split(" ");
console.log(words);
// хз как найти самое часто встречаемое слово без циклов и функций типа map()

const incomeSentence =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
const perMonthRegexp = /((\d+).*?(per month))/gi;
console.log(incomeSentence.split("per month"));
// сложная регулярка в 4 :(

console.groupEnd();
