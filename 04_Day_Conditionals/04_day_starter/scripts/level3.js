console.group("Level 3");

const monthNormalized =
  month[0].toUpperCase() + month.toLowerCase().substring(1);
let daysInMonth;
switch (monthNormalized) {
  case "February":
    daysInMonth = 28;
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    daysInMonth = 30;
    break;
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    daysInMonth = 31;
    break;
  default:
    console.error("Invalid month:", monthNormalized);
    break;
}
console.log(`${monthNormalized} has ${daysInMonth} days.`);

console.groupEnd();
