function factorial() {
  // declare variables
  let number = 0;
  let factorial = 1;
  let output = "";

  // input
  number = parseInt(prompt("Enter a number between 1 and 20"));
  while (isNaN(number) || number <= 1 || number >= 20) {
    number = parseInt(prompt("Please enter a number between 1 and 20"));
  }

  // calculate the factorials (arrow function)
  const fac = (num) => {
    let fac = 1;
    for (let i = 1; i <= num; i++) {
      fac *= i;
    }
    return fac;
  };

  output = "Factorials up to " + number + ": ";
  // calculate factorials
  for (let j = number; j >= 1; j--) {
    // ^outer loop
    // factorial = 1;
    // for (let i = 1; i <= j; i++) {
    //   // ^inner loop
    //   factorial *= i;
    // }
    // output += j + "! = " + factorial + ", ";

    output += j + '! = ' + fac(j) + ', ';
  }

  // output factorials
  alert(output);
}

factorial();
