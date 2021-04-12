// data contains the name, followed by the age, followed by the details object
const data = ["Gene", 55, {
    id: 1,
    created_at: "Mar 16, 2021"
}];

// Destructure the data array
const [name, age, details] = data;

// Output
console.info(name); // "Sam"
console.info(age); // 23
console.info(details); // {id: 1, created_at: "Mar 16, 2021"}
