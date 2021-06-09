let date = new Date();

console.info(date.toLocaleTimeString()); // -> 10:36:48 AM (depending on your computer's clock)

// save intervalId in a variable so we can clear it later on
const intervalId = setInterval(() => {
    date = new Date(); // get a new instance of date every second
    console.info(date.toLocaleTimeString()); // shows the time every second
}, 1000);

// when you want to clear the interval:
// clearInterval(intervalId);
