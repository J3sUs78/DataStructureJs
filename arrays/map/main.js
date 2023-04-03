const numbers = [1,2,3,4,5,6,7]

//*Forma estructurada
function sumNumber(array, num){
    const newArray = [];
    for (const n of array) {
        newArray.push(n + num);
    }
    return newArray;
}

//*Funcion existente, MAP
function sumNumber2(array, num) {
    return array.map(n => n + num);
}

console.log(sumNumber(numbers,10));
console.log("******************")
console.log(sumNumber2(numbers,10));