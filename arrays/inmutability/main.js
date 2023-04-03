const num1 = [1, 2, 3, 4, 5]; //*Un array es un objeto
const num2 = [1, 2, 3, 4, 5];


//*Se llama y retorna directamente la array que se recibe pero modificada
function mulMutable(array, num) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= num;
    }
    return array;
}
const newArray = mulMutable(num1, 2);
console.log("Array 1 modificada: " + newArray);
console.log("Array 1 normal: " + num1);
//*Un metodo inmutable no modifica el array original

function mulInmutable(array, num) {
    const newArray = []; //*Se crea una nueva array dentro del function para no modificar el original
    for (let i of array) {
        newArray.push(i * num);
    }
    return newArray;
}

const newArray2 = mulInmutable(num2, 2);
console.log("Array 2 Modificada segun los valores de la array usada en la funcion: " + newArray2);
console.log("La misma array pero no fue modificada: " + num2);

//*Inmutabilidad en Objetos
class Beer {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
//Cambia el objeto
function toUpperMutable(beer) { //*Opera el objeto en si ya que le asigna el valor a la propiedad name en beer.name, y retorna el objeto original pero cambiado
    beer.name = beer.name.toUpperCase();
    return beer;
}

const beer1 = new Beer("cristal", 20);

//*la funcion JSON.stringify(), convierte el objeto en una cadena de texto en formato JSON.
console.log("Objeto antes de la funcion: " , JSON.stringify(beer1));

console.log("Objeto en la funcion: " , JSON.stringify(toUpperMutable(beer1)));

console.log("Objeto despues de la funcion ya modificado: " , JSON.stringify(beer1));


//*No cambia el objeto
function toUpperCaseInmutable(beer) { //*Devuelve una nueva instancia del objeto beer con el nombre en mayusculas y el precio igual al objeto pasado
    const newBeerName = beer.name.toUpperCase();
    return new Beer(newBeerName, beer.price);
}

//*Funcion Spread operator
function InmutableUpper2(beer){
    const copybeer = {...beer};
    copybeer.name = copybeer.name.toUpperCase();
    return copybeer;
}

function InmutableUpper3(beer){ //clonar objetos mas complejos
    const copybeer = structuredClone(beer);
    copybeer.name = copybeer.name.toUpperCase();
    return copybeer;
}

const beer2 = new Beer("becker", 35);

console.log("****************************")

console.log("Objeto antes de la funcion: " , JSON.stringify(beer2));

console.log("Objeto en la funcion: " , JSON.stringify(InmutableUpper3(beer2)));

console.log("Objeto despues de la funcion no es modificado : " , JSON.stringify(beer2));
