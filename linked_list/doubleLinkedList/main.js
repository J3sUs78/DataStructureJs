class Person {
    //asignando los valores a las propiedades
    constructor(name, lastname, age, foodfav) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.foodfav = foodfav;
    }
    get hi() {
        return `hola soy ${this.name} y tengo ${this.age} años`
    }
    get favFood() {
        return `Yo ${this.name} ${this.lastname} amo la ${this.foodfav}.`
    }
}


//*NODO
class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(value) {
        this.size++;
        const node = new Node(value);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    delete(value){
        if(this.size === 0) return;

        if(this.head.value === value){
            if(this.size === 1){
                this.head = null;
                this.tail = null;
            }else{
                this.head = this.head.next;
                this.head.prev = null;
            }
            this.size--;
        }else if(this.tail.value === value){
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.size--;
        } else{
            let current = this.head;
            while(current.next !== null){
                if(current.next.value === value){
                    current.next = current.next.next;
                    current.next.prev = current;
                    this.size--;
                    break;
                }
                current = current.next;
            }
        } 
    }

    show() {
        let current = this.head;
        console.log("=========Lista Normal========");
        console.log(`*Cabeza: ${this.head?.value}`)
        console.log(`*Cola: ${this.tail?.value}`)
        while (current !== null) {
            console.log(`Valor: ${current.value}`);
            console.log(`\n\tSiguiente: ${current.next?.value}`);
            console.log(`\n\tPrev: ${current.prev?.value}`);
            current = current.next;
        }
    }

    reverse() {
        let current = this.tail;
        console.log("=======Lista Reverse========");
        console.log(`*Cabeza: ${this.head?.value}`)
        console.log(`*Cola: ${this.tail?.value}`)
        while (current !== null) {
            console.log(`Valor: ${current.value}`);
            console.log(`\n\tSiguiente: ${current.next?.value}`);
            console.log(`\n\tPrev: ${current.prev?.value}`);
            current = current.prev;
        }
    }


}

const listPersons = new DoublyLinkedList();

listPersons.add(1);
listPersons.add(2);
listPersons.add(3);
listPersons.add(4);
//listPersons.show();
//listPersons.reverse();


/*
const form = document.getElementById('form');
const nombreInput = document.getElementById('txtNombre');
const apellidoInput = document.getElementById('txtApellido');
const edadInput = document.getElementById('txtEdad');
const comidaInput = document.getElementById('txtComida');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const edad = parseInt(edadInput.value);
    const comidaFav = comidaInput.value;

    const persona = new Person(nombre, apellido, edad, comidaFav);
    listPersons.add(persona);

    // Limpiar los campos del formulario
    nombreInput.value = '';
    apellidoInput.value = '';
    edadInput.value = '';
    comidaInput.value = '';

    console.table(listPersons);
});
*/

//*EJMPLO CON FRONT-END

const title = document.getElementById('title');
const image = document.getElementById('image');
const divInfo = document.getElementById('info');

const listMovies = new DoublyLinkedList();

listMovies.add({ name: 'GodFather', picture: 'img/mov1.png'})
listMovies.add({ name: 'Malefica', picture: 'img/mov2.png'})
listMovies.add({ name: 'Avengers', picture: 'img/mov3.png'})

let movie = listMovies.head;

function showMovie(){
    title.innerHTML = movie.value.name;
    image.src = movie.value.picture;

    const movieNext = movie.next?.value;
    const moviePrev = movie.prev?.value;

    divInfo.innerHTML = (moviePrev ? `Anterior: ${moviePrev.name}`: `No hay Anterior`)
    divInfo.innerHTML += (movieNext ? `  | Siguiente: ${movieNext.name}`:`| No hay siguiente`);
}

function nextMovie(){
    if(movie.next){
        movie = movie.next;
        showMovie();
    }
}
function prevMovie(){
    if(movie.prev){
        movie = movie.prev;
        showMovie();
    }
}
showMovie();