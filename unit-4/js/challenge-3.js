let arrNumbers = [5, 2, 4];

function multiplyArray(numbers) {
  let products = [];
  
  if (numbers.length === 0) {
    return 0;
  }

  let product = 1;

  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
    products.push(product);
  }

  return products;
}

console.log(multiplyArray(arrNumbers));
