const map = new Map();

//*insertar info
map.set(1, 'uno');
map.set(2, 'dos');
map.set(3, 'tres');
map.set(4, 'cuatro');
console.log(map);


//obtener valor
console.log(map.get(3));

//Validar si esque existe
console.log(map.has(5)); //retorna true o false

//eliminar 
map.delete(2);
console.log(map);

const KeyObject1 = {id: 1, hash: "abd"};

map.set(KeyObject1, "Jesus");

console.log(map);

//const m = console.log(map.set(20,"Hugo"));

map.set(20,"Hugo")
.set(30, "fran")
.set(45,"elisa");

//*Recorrido

for(let value of map.values()){
    //console.log(value);
}

for(let key of map.keys()){
    //console.log(key);
}

for(let item of map){
    //console.log(item);
}
//eliminar mapa
map.clear();
//console.log(map);


//!MODO DE USO CON EL HTML 

const txtCode = document.getElementById("code");
const txtCustomer = document.getElementById("customer");
const divContent = document.getElementById("content");

const customers = new Map();

function add(){
    customers.set(txtCode.value, txtCustomer.value);
    txtCode.value = "";
    txtCustomer.value = "";
    txtCode.focus();
    show();
}

function show(){
    divContent.innerHTML = "";

    for(let item of customers){
        divContent.innerHTML += `<div>
            <b>${item[0]}</b> ${item[1]}
        </div>`
    }
}