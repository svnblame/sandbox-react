const grades = [10, 8, 9, 4, 16];

// return all grades >= 10
const subset1 = grades.filter(grade => grade >= 10);
console.info(subset1);  // [10, 16]

// remove the 2nd grade
const subset2 = grades.filter(grade => grade !== 8);
console.log(subset2); // [10, 9, 4, 16]
