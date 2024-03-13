const counterVowelsInPhrase = () => {
    let phrase = document.getElementById('phrase').value.toLowerCase();

    let counterA = 0;
    let counterE = 0;
    let counterI = 0;
    let counterO = 0;
    let counterU = 0;


    for(let i = 0; i < textVocal.length; i++) {
        let vowel = textVocal[i];

        if('a'.includes(vowel)){
            counterA++;
        }else if('e'.includes(vowel)){
            counterE++;
        }else if('i'.includes(vowel)){
            counterI++;
        }
        else if('o'.includes(vowel)){
            counterO++;
        }
        else if('u'.includes(vowel)){
            counterU++;
        }

    }

    document.getElementById('show').innerHTML = `Hay "a": ${counterA}, "e": ${counterE},  "i": ${counterI},  "o": ${counterO},  y "u": ${counterU} en la frase.`
}