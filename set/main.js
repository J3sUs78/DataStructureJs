
//*SET

//*no se repiten los elementos

const set = new Set(); //!es mutable

set.add(5);
set.add(2);
set.add(4);

console.log(set);

set.add(2); //*Ya existe, entonces se ignora
set.add(11/11);

console.log(set);

//*Estos dos aunque parescan iguales, son distintos, ya que no estan en una variable que haga referencia.
set.add({name: "jesus"});
set.add({name: "jesus"});

//*Se guarada en la variable people, y si se usa la funcion add con la misma variable entonces no lo agrega, pero si crea otra variable, y agrega el mismo objeto entonces no pasa nada

const people = {name: "Ignacio"};
const people2 = {name: "Ignacio"};
set.add(people);
set.add(people);
set.add(people2);

console.log(set);

//*Existencia de objeto
const book = {name: "Harry Potter"};

set.add(book);

if(set.has(5)){
    console.log("El 5 esta en el set");
}

//*No lo encuentra porque es por valor, no por referencia, y el objeto esta en la variable book mediante una referencia.
if(set.has({name: "Harry Potter"})){
    console.log("El Harry Potter esta en el set");
}

if(set.has(book)){
    console.log("El book por referencia esta en el set");
}

//*Array en set

//*Esto nos sirve para cuando necesitemos quitar los valores repetidos de una array

const array = [5,4,3,2,1,2,3,4,5];

const set2 = new Set(array);
//*Filtra los duplicados
//console.log(set2);

for(const item of set){
    //console.log(item);
}

//*Limpiar set

set.clear();
//console.log(set);

//*COLECCION DE FUNCIONES

const functions = new Set();

function run(){
    for(const fn of functions){
        fn();
    }
}

function addAct(fn){
    functions.add(fn);
    console.log(functions);
}

function action1(){
    console.log("Action 1");
}
function action2(){
    console.log("Action 2");
}
function action3(){
    console.log("Action 3");
}
function action4(){
    console.log("Action 4");
}

console.log(action2 instanceof Object); //*Tira true porque igual una function la toma como un object

