const numbers = [1,2,3,4,5,6];

//*Forma Structurada
function sumNumbers(array){
    let sum = 0;
    for(let n of array){
        sum += n;
    }
    return sum;
}

//*Funcion existente
function sumNumbers2(array){
    return array.reduce((cont, n) => cont + n, 0);
}

console.log(sumNumbers(numbers));
console.log(sumNumbers2(numbers));