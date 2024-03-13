const divisibleFor = () => {
    let number = parseInt(document.getElementById('number').value);

    let dividers = [];

    for(let i = 1; i <= number; i++) {
        if(number % i === 0){
            dividers.push(i);
        }
    }

    document.getElementById('show').innerHTML = `Los divisores son: ${dividers.join(', ')}`;
}