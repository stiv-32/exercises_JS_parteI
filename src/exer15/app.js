const primeNumber = () => {
    let number1 = parseInt(document.getElementById('number1').value);

    let divisorsNumber1 = [];

    for (let i = 1; i <= number1; i++) {
        if (number1 % i === 0) {
            divisorsNumber1.push(i);
        }
    }

    if (divisorsNumber1.length === 2) {
        document.getElementById('show').innerHTML = 'El número es primo';
    } else {
        document.getElementById('show').innerHTML = 'El número no es primo';
    }
}