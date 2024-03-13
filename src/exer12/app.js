
 function obtenerDivisores(numero) {
  let divisores = [];

  for (var i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores.push(i);
    }
  }

  return divisores;
}

function mostrarDivisores() {
  const numeroInput = document.getElementById("numeroInput");
  const resultadoDiv = document.getElementById("resultadoDiv");

  const numeroDado = parseInt(numeroInput.value);

  if (isNaN(numeroDado)) {
    resultadoDiv.textContent = "ingresa un número válido.";
  } else {
    const divisores = obtenerDivisores(numeroDado);
    resultadoDiv.textContent = "Los divisores son: " + divisores.join(", ");
  }
}
 
