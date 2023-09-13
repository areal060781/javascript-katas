const grades = [99, 83, 87, 91, 77];

//Find the first grade that is less than 80.
const underEighty = grades.find(value => value < 80);
console.log(underEighty);

//Find the index of the first grade that is over 80.
const overEighty = grades.findIndex(value => value > 80);
console.log(overEighty);
