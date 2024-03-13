function clickLetra() {
    const letterVar = document.getElementById("letter1").value.toLowerCase();
    let contador=0;
  
    for (let i = 0; i < letterVar.length; i++) {
      if (letterVar[i] === "a") {
        contador++;
      }
    }
    document.getElementById("printPhrase").innerHTML = `se repite la vocal a ${contador} veces`;
  }