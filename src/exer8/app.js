function repeatVocal() {
  const phraseVocal = document.getElementById("vocalRepeat").value;
  let numberVocal = 0;

  for (let i = 0; i < phraseVocal.length; i++) {
    if (phraseVocal.toLowerCase().match(/[aeiou]/g)) {
      contador++;
    }
  }
  document.getElementById("printRep").innerHTML = `las vocales de tu frase son: ${numberVocal} `;
}
