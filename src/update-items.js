const grades = [10, 20, 18, 14];
// change 18 to 17
const updateGrades = grades.map(grade => {
    if (grade === 18) {
        return 17;
    }
    // in all other cases, keep it as it was
    return grade;
});

console.info(updateGrades); // [10, 20, 17, 14]