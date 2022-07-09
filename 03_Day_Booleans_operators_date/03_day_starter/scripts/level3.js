console.group("Level 3");

console.groupCollapsed("Task 1");

const fullMonth = month >= 10 ? `${month}` : `0${month}`;
const fullDate = date >= 10 ? `${date}` : `0${date}`;
const fullHours = hours >= 10 ? `${hours}` : `0${hours}`;
const fullMinutes = minutes >= 10 ? `${minutes}` : `0${minutes}`;
console.log(
  "YYYY-MM-DD HH:mm",
  `${fullYear}-${fullMonth}-${fullDate} ${fullHours}:${fullMinutes}`
);

console.groupEnd();

console.groupEnd();
