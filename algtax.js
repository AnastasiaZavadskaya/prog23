function calculateZ() {
    let X = 5;
    let Y = 7;
    let Z;
  
    if (X > Y) {
      Z = X * Y;
    } else {
      Z = Math.log(X + Y);
    }
  
    document.getElementById('result').innerText = "Z = " + Z;
  }