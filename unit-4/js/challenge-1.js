function calcOddN(number) {
  let N = number;
  let maxN = 20;
  let totalOfOddNumbers = 0;

  // Create array from 1 to maxN
  let arrayN = [];
  for (var i = 1; i <= maxN; i++) {
    arrayN.push(i);
  }
  console.log(arrayN);

  // Filter odd numbers from arrayN
  let arrayOddN = [];
  for (let i = 1; i < maxN; i++) {
    if (i % 2 !== 0) {
      arrayOddN.push(i);
    }
  }
  console.log(arrayOddN);

  // Slice the N/number elements from the arrayOddN
  let oddNumbersToCalc = arrayOddN.slice(0, N);
  console.log(oddNumbersToCalc);
  console.log('Get first ' + oddNumbersToCalc.length + ' odd numbers (' + oddNumbersToCalc + ') and calculate the sum');

  // Calculate the sum of odd numbers from the newArray
  for (var i = 0; i < oddNumbersToCalc.length; i++) {
    totalOfOddNumbers += oddNumbersToCalc[i];
  }
  console.log('Total of ' + oddNumbersToCalc.length + ' odd numbers is: ' + totalOfOddNumbers);
}

calcOddN(4);
