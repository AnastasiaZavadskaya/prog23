function calculateZ(X, Y) {
    if (X > Y) {
      return X * Y;
    } else {
      return Math.log(X + Y);
    }
  }
  
  function calculateAndDisplay() {
    let X = parseFloat(document.getElementById('inputX').value);
    let Y = parseFloat(document.getElementById('inputY').value);
    let Z = calculateZ(X, Y);
    document.getElementById('result').innerText = "Z = " + Z;
  }