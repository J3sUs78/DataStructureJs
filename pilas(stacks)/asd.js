//Implementacion de pila
//*IMPORTANTE: SE CREA EL ELEMENTO PRIVADO PARA QUE QUIEN  LO MANIPULE , NO MANIPULE LA LISTA EN SI. NOSOTROS LE VINDRAMOS LOS METODOS PARA ELLO
class Stack {
    //*Array de Elementos Privados #
    #items = []; //*Podemos acceder a items, solo si accedemos a sus metodos
    //*Si tenemos un metodo que pueda acceder a ese elemento, podremos entonces accder
    push(item) {
        this.#items.push(item);
    }

    pop(item) {
        return this.#items.pop();
    }

    peek() { //*Puedo Obtener su ultimo elemento y poder verlo
        return this.#items[this.#items.length - 1];
    }

    size() {
        return this.#items.length;
    }

    isEmpty(){
        return this.#items.length === 0;
    }   
    
    printAll() {
        for (let i = 0; i < this.#items.length; i++) {
            console.log(`Num ${i + 1}: ${this.#items[i]}`);
        }
    }
    printAll2() {
        for (let index in this.#items) {
            console.log(`Índice ${index}: ${this.#items[index]}`);
        }
    }

    getItems(){
        return [...this.#items];
    }

    addItemAtIndex(index, item) {
        if (index < 0 || index > this.#items.length) {
            console.error("Índice fuera de rango");
            return;
        }
        this.#items.splice(index, 0, item);
    }

    removeItemAtIndex(index) {
        if (index < 0 || index >= this.#items.length) {
            console.error("Índice fuera de rango");
            return;
        }
        this.#items.splice(index, 1);
    }

}

function manipulateStack(stack) {
    let choice = prompt("¿Quieres agregar o eliminar un elemento? (A/E)").toUpperCase();
    let index = parseInt(prompt("¿En qué índice quieres realizar la acción?"));
    let item = prompt("Introduce el elemento que quieres agregar:");

    if (choice === "A") {
        stack.addItemAtIndex(index, item);
    } else if (choice === "E") {
        stack.removeItemAtIndex(index);
    }
}

const mystack = new Stack();
mystack.push("Jesús");
mystack.push("Kako");
mystack.push("Frnaso");
//console.log(mystack.printAll());
let a = mystack.peek();
//console.log(mystack.pop());
//console.log(mystack);
//const b = mystack.push(a);
//console.log(mystack);
//console.log(manipulateStack(mystack));
//console.log(mystack);

//items.push("Pato");
console.log("My stack: ",mystack.getItems());
//console.log(items);
const inputName = document.getElementById("name");
const divContent = document.getElementById("content");

const stackNames = new Stack();
console.log("My stackNames: ",stackNames.getItems());
function addToStack(){
    stackNames.push(inputName.value);
    showNames();
    inputName.value = "";
    inputName.focus();
}

function deleteToStack(){
    stackNames.pop();
    showNames();
}


function showNames(){
    const items = stackNames.getItems();
    divContent.innerHTML = "";
    items.forEach((item) =>divContent.innerHTML += `<p>${item}<p/>`)
    
}