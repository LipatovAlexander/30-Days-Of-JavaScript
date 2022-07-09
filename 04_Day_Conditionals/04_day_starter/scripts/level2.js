console.group("Level 2");

const scores = Math.ceil(Math.random() * 101);
let grade;
switch (true) {
  case scores >= 80:
    grade = "A";
    break;
  case scores >= 70:
    grade = "B";
    break;
  case scores >= 60:
    grade = "C";
    break;
  case scores >= 50:
    grade = "D";
    break;
  default:
    grade = "F";
    break;
}
console.log(`${scores}: ${grade}`);

const month = prompt("Enter a month:", "September");
let season;
switch (month) {
  case "September":
  case "October":
  case "November":
    season = "Autumn";
    break;
  case "December":
  case "January":
  case "February":
    season = "Winter";
    break;
  case "March":
  case "April":
  case "May":
    season = "Spring";
    break;
  case "June":
  case "July":
  case "August":
    season = "Summer";
    break;
}
console.log("The season is", season);

const day = prompt("What is the day today?", "friday").toLowerCase();
switch (day) {
  case "monday":
    console.log("Monday is a working day.");
    break;
  case "tuesday":
    console.log("Tuesday is a working day.");
    break;
  case "wednesday":
    console.log("Wednesday is a working day.");
    break;
  case "thursday":
    console.log("Thursday is a working day.");
    break;
  case "friday":
    console.log("Friday is a working day.");
    break;
  case "saturday":
    console.log("Saturday is a weekend.");
    break;
  case "sunday":
    console.log("Sunday is a weekend.");
    break;
}

console.groupEnd();
