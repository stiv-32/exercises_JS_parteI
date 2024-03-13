const commonDivisors = () => {
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);

    let divisorsNumber1 = [];
    let divisorsNumber2 = [];
    let commonNumbers = [];

    for(let i = 1; i <= number1; i++) {
        if(number1 % i === 0){
            divisorsNumber1.push(i);
        }
    }

    for(let i = 1; i <= number2; i++) {
        if(number2 % i === 0){
            divisorsNumber2.push(i);
        }
    }

    let minLength = Math.min(divisorsNumber1.length, divisorsNumber2.length);

    for (let i = 0; i < minLength; i++) {
        if (divisorsNumber1[i] === divisorsNumber2[i]) {
            commonNumbers.push(divisorsNumber1[i]);
        }
    }
    document.getElementById('show').innerHTML = `Los divisores en común son: ${commonNumbers.join(', ')}`
}