function sayHello() {
    return "Welcome!";
}

function getUser() {
    // return the id and a function that welcomes the user
    return [15, sayHello];
}

const [id, greet] = getUser();
console.info(id); // 15
console.info(greet()); // Welcome!
