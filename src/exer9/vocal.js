function clickVocals() {

  const textVocals = document.getElementById("textExample").value;
  let vocals =['a','e','i','o','u']
  let contador = 0;

  for (let letra of textVocals) {
    if (vocals.includes(letra)){
      contador++;
    }
  }
  document.getElementById("vocalsText").innerHTML = `vocales que aparecen ${contador}` ;

}

function reset() {

  document.getElementById("vocalsText").innerHTML = "";
  document.getElementById("clase").innerHTML = "";
}
