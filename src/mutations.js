const first_array = [];
const second_array = first_array;   // second_array now points to first_array

console.log(first_array === second_array);  // true and expected

first_array.push(10);
console.log(first_array === second_array);  // true but unexpected
