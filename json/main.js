//setTimeout(()=>console.log(2+1),3000);


//*El primer ejemplo crea una promesa utilizando el constructor de Promise y establece un temporizador para simular una tarea asíncrona. La promesa resuelve el string "Duck" si se completa correctamente y la rechaza con un mensaje de error si algo sale mal.

//*PROMESAS
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //console.log("Se ejecuta la promesa");
        //reject("Algo paso, ERROR");
        resolve("Duck");
    }, 1000);
});
/*
myPromise
    .then(data => console.log("Returned data of is: " + data))
    .catch(error => console.error(error))


//*El segundo ejemplo utiliza la API fetch para hacer una solicitud GET a un servicio web que devuelve datos en formato JSON. La respuesta se maneja utilizando .then() para convertirla en un objeto JavaScript y luego se muestra en la consola.

//Api Fetch
fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(json => console.log(json))


//*El tercer ejemplo muestra cómo usar async y await para hacer lo mismo que en el segundo ejemplo, pero de una manera más concisa y legible. El código asincrónico se envuelve en una función autoinvocada con async, que luego utiliza la palabra clave await para esperar a que la respuesta de fetch sea resuelta. Una vez que se resuelve, se convierte en formato JSON y se muestra en la consola.

//*async y await
/*
(async function () {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
})();


//*Leyendo JSON con el API fetch
fetch("people.json")
    .then(data => data.json())
    .then(json => {
        console.log(json); // agrega esta línea para verificar si la respuesta JSON es válida
        const people = json;
        console.log(people.name);
        for (const i of people.skills) {
            console.log("Skill: " + i);
        }
    })
*/
//*Object Literal, objetos literales
const sale = {
    customer: "Jesús Castro",
    total: 25000,
    items: [
        { name: "Monitor LG", price: 10000 },
        { name: "Smartphone 5g", price: 10000 },
        { name: "teclado redragon", price: 15000 }
    ],
    //Una funcion tal cual 
    showItems() {
        /*
        for (const i of this.items) {
            console.log(i.name);
        }*/
        this.items.forEach(i => console.log(i.name, "precio: ", i.price))
    },
    showInfo() {
        console.log("INFO DE LA VENTA: ");
        console.log("Nombre del cliente: ", this.customer);
        console.log("Total de la venta: ", this.total);
        this.showItems();
    }
}


sale.showInfo();

//*Los objetos literales en JavaScript son una forma común y poderosa de crear y manipular objetos. Aquí hay algunos pros y contras que se pueden considerar:
// Crear un objeto literal para representar a una persona
const person = {
    name: "Juan",
    age: 30,
    address: {
        street: "Calle 123",
        city: "Ciudad de México"
    },
    hobbies: ["Leer", "Cocinar", "Viajar"],
    sayHi: function () {
        console.log("¡Hola! Mi nombre es " + this.name + ".");
    }
};
// Acceder a las propiedades y métodos del objeto
console.log(person.name); // Juan
console.log(person.address.city); // Ciudad de México
person.sayHi(); // ¡Hola! Mi nombre es Juan.