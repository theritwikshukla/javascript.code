// Create variables to hold the time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Create a variable to store the setInterval() function
let interval;

// Function to increment the stopwatch
function incrementStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  // Display the updated time on the console
  console.log(
    `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  );
}

// Function to start the stopwatch
function startStopwatch() {
  interval = setInterval(incrementStopwatch, 1000);
}

// Function to stop the stopwatch
function stopStopwatch() {
  clearInterval(interval);
}

// Example usage
startStopwatch(); // Start the stopwatch
// Wait for a few seconds
setTimeout(stopStopwatch, 100000); // Stop the stopwatch after 5 seconds