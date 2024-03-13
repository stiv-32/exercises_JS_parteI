function bigNumber() {
  let numberIdn = 0;
  let num1 = parseInt(document.getElementById("number1").value);
  let num2 = parseInt(document.getElementById("number2").value);
  let num3 = parseInt(document.getElementById("number3").value);

  if (num1 >= num2 && num1 >= num3) {
    numberIdn = num1;
  } else if (num2 >= num1 && num2 >= num3){
    numberIdn = num2;
  }else{
    numberIdn = num3;
  }
  
  document.getElementById("result").value = numberIdn;
}
