let amountOfRandomNumbers = 5;
function randomAverage(n) {
  let randomNumbers = [];
  let sumNumbers = 0;

  if (n <= 0) {
    console.log("'n' must be at least 1");
  } else if (!Number.isInteger(n)) {
    console.log("'n' must be a number");
  } else {
    for (let i = 0; i < n; i++) {
      randomNumbers.push(Math.random());
      sumNumbers += randomNumbers[i];
    }
    let average = (sumNumbers / randomNumbers.length).toFixed(1);

    console.log(randomNumbers);
    console.log("The average of " + n + " random number(s) between 0 and 1 is: " + average);

    // Return the average rounded to 1 decimal places
    return average;
  }
}

randomAverage(amountOfRandomNumbers);
