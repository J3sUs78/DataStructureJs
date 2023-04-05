
//*Clase para funcionalidad de una cola o queue
class Queue{

    #content = [];

    enqueue(item){ 
        this.#content.push(item);
    }

    dequeue(){
        return this.#content.shift();
    }

    isEmpty(){
        return this.#content.length === 0;
    }

    peek(){
        return this.#content[0];
    }

    size(){
        return this.#content.length;
    }

    getItems(){
        return [...this.#content];
    }

}

const queue = new Queue();
queue.enqueue("Jesus");
queue.enqueue("luka");
queue.enqueue("pato");
queue.enqueue("Marisol");
console.log(queue.getItems());
console.log("Primero en la cola: ",queue.peek());
console.log("Cliente saliendo...",queue.dequeue())
console.log("Siguiente en la cola: ",queue.peek());


//*Ejercicio de solicitudes
const queueRequests = new Queue();
const divReq = document.getElementById("req");
const divResult = document.getElementById("result");
const url = "https://jsonplaceholder.typicode.com/posts";

let i = 1;

function add(){
    queueRequests.enqueue(i++);
    showReq();
}

async function request(){ //Si la funcion no es async no se puede entonces usar el await
    while(!queueRequests.isEmpty()){
        const res  = await fetch(url+"/"+queueRequests.dequeue());
        const data = await res.json();
        await new Promise(r => setTimeout(r,1000));
        showReq();
        divResult.innerHTML = `<p>${data.id} ${data.title}</p>` + divResult.innerHTML;
    }
}


function showReq(){
    const items = queueRequests.getItems();
    if(items.length === 0){
        divReq.innerHTML = "Sin solicitudes";
        return;
    }
    divReq.innerHTML = "";
    items.forEach(function(item){
        divReq.innerHTML += `<div>Solicitud ${item}</div>`;
    });
}