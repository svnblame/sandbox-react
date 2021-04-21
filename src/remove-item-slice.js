const grades = [10, 8, 9, 4, 16];

// remove the first grade
// think of it as: get all grades except the first one
const subset1 = grades.slice(1);    // start from position 1
console.info(subset1);  // [8, 9, 4, 16]

// remove the last 2 grades
// think of it as: get all grades except the last 2
// so start from 0 and stop after 5 -2 = 3 items
const subset2 = grades.slice(0, grades.length - 2);
console.info(subset2);  // [10, 8. 9]
