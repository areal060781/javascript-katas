const condiments = ['ketchup', 'mustard', 'relish', 'mayo'];
// Use reverse to change the order of this array.
console.log(condiments.reverse());

const employees = ['Adams', 'Carter', 'Davis', 'Fraklin', 'Zappa'];
// Use reverse to change the order of this array,
// but keep the original array intact.
const reversed = [...employees] //Array.from(employees);
reversed.reverse();
console.log(employees);
console.log(reversed);
