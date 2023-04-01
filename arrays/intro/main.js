let array = [1, 2, "name", true];

function showArray1(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}


function showArray2(array) {
    let i = 0;
    while (array[i] !== undefined) {
        console.log(array[i]);
        i++;
    }
}


function showArray3(array){
    for(let item of array)
        console.log(item);
}
//*Al utilizar let para declarar la variable item, la variable se limita al ámbito del bucle for..of. Esto significa que item solo existe dentro del bucle y se elimina automáticamente después de que se ejecuta el bucle.

console.log("====1er FOR====")
showArray1(array);
console.log("====2do FOR====")
showArray2(array);
console.log("====3er FOR====")
showArray3(array);
console.log("====************====")
console.log("====Array.push()====")
array.push(3000);
showArray3(array)

