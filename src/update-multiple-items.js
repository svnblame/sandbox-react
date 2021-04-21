const grades = [10, 8, 9, 4, 16];
// add 1 to all grades below 10
const updatedGrades = grades.map(grade => {
    if (grade < 10) {
        return grade + 1;
    }
    // in all other cases, keep it as it was
    return grade;
});
console.info(updatedGrades);    // [10, 9, 10, 5, 16]
