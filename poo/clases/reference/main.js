//*VALORES PRIMITIVOS
//* string, number, bigint, boolean, undefined y symbol

let number = 4;


//* el valor que se pasa a una funcion es el valor no la referencia

function edit(num, value) {
    num = value;
    console.log("valor interno: " + num);
}

edit(number, 10);
console.log("valor externo: " + number);

//*valores por referencia
class A {
    constructor(number) {
        this.number = number;
    }
}

let a = new A(4);

function editObj(obj, num, ag) {
    obj.number = num;
    console.log("Valor objeto interno: " + obj.number);
}

editObj(a, 10, 2);
console.log("Valor objeto externo " + a.number);
//*Al mandar un objeto a una funcion que lo modifica internamente entonces lo modificas en si al objeto

//*si en vez de pasar un objeto pasaramos un valor primitivo el valor inicial se mantendra externamente pero cuando lo modificamos en una funcion entonces cuando usemos esa funcion el valor se vera modificado


//*los valores pasados se copian en una nueva variable dentro de la funcion, esto significa que que cualquier cambio realizado dentro de la funcion no afecta el valor original que se paso en la funcion

function duplicar(numero) {
    numero = numero * 2;
    return numero;
}

let miNumero = 5; //primero se da el valor de 5 y se llama la funcion que lo multiplica pero esto no significa que por multiplicarlo en una funcion el valor cambiara externamente.
console.log(duplicar(miNumero)); // devuelve 10
console.log(miNumero); // devuelve 5

//*los valores pasados por referencia se transfieren como una referencia ala ubicacion de la memoria donde se almacena el valor original. esto significa que cualquier cambio realizado dentro de la funcion afectara al valor original. Los objetos y matrices se pasan por referencia por ejemplo: 

function agregarElemento(array) {
    array.push(" Nuevo elemento");
    return array;
}

let miArray = ["Elemento 1", " Elemento 2"];
console.log("Array original: "+miArray);
console.log("Array modificada por la funcion: "+agregarElemento(miArray)); // devuelve ["Elemento 1", "Elemento 2", "Nuevo elemento"]
console.log("Vemos la array con el valor nuevo dentro de ella sin tener que llamar la funcion denuevo : "+miArray); // devuelve ["Elemento 1", "Elemento 2", "Nuevo elemento"]

