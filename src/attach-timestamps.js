/**
 * @param {object} user
 */
function attachTimestamps(user) {
    const date = new Date();
    return { ...user, created_at: date, updated_at: date }
}

// Sample usage
const testUser = {
    id: 29,
    name: "Sam",
    type: "admin"
}
const newUser = attachTimestamps(testUser);
console.log(newUser);
// check if the operation was immutable
console.log(newUser === testUser); // immutable when it returns false
