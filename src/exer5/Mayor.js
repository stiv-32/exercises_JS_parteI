function bigNumber(){
  let numberIdn = 0;
  let num1 = parseInt(document.getElementById("number1").value);
  let num2 = parseInt(document.getElementById("number2").value);

  if (num1>num2){
    numberIdn = num1;
  } else {
    numberIdn = num2;
  }
  document.getElementById('result').value = numberIdn;
}
