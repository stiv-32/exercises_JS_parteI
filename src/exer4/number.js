let btn = document.querySelector("#btn");

btn.onclick = function(){

     let num1 = document.querySelector("#num1").value;
     let num2 = document.querySelector("#num2").value;
     
     let suma = parseFloat(num1) + parseFloat(num2);

     document.querySelector("#result").innerHTML = "Result: " + suma;

}