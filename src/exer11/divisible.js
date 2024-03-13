function numberDivi() {
  const number = document.getElementById("num1").value;
  const div = document.getElementById("num2").value;

  const isDivisible = (dividend, divisor) => dividend % divisor === 0;

  if (number % div === 0) {
    document.getElementById("numberDivisible").innerHTML =
      number + " is divisible by " + div;
  } else {
    document.getElementById("numberDivisible").innerHTML =
      number + " is not divisible by " + div;
  }
}
