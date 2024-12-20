var n = 8;

function drawConsolePyramid(n) {
  var width = 2 * n - 1; // Calculate width of row
  var midpoint = Math.floor(width / 2); // Middle of pyramid.
  let column = ""; // Will be reset each column loop

  for (var i = 0; i < n; i++) {
    // Looping through columns in pyramid
    column = "";
    for (var j = 0; j < width; j++) {
      if (j < midpoint - i || j > midpoint + i) {
        column += " ";
      } else {
        column += "*";
      }
    }
    console.log(column);
  }
}

drawConsolePyramid(n); // pass (n)number as column of pyramid.
