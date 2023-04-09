
//*Implementacion de una lista enlazada

//*Un nodo/node tiene un valor y tiene quien es el siguiente 
class Node{
    //*El constructour recibe el valor cuando lo iniciemos,  
    constructor(value){
        this.value = value; 
        this.next = null; //*Creamos un null en la siguiente cola del nodo, para seguir el bucle
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    add(value){ //*Recibimos un valor, creamos un nodo, representa el valor, y mandamos ese valor
        const node = new Node(value);
        if(this.head === null){ //*Cuando el head sea null, el nodo creado, sera el head
            this.head = node;
        }else{ //*buscamos cual es el ultimo, creamos un current que tiene el head
            let current = this.head;
            while(current.next !== null){ //*recorrido de la lista, mientras el elemento sea diferente de null
                current = current.next; //*Cmabia al elemnto que sigue con current.next
            }
            current.next = node;
        }
    }

    delete(value){
        if(this.head.value === value){
            this.head = this.head.next;
        }else{
            let current = this.head;
            while(current.next !== null){
                if(current.next.value === value){
                    current.next = current.next.next;
                    break;
                }
            }
            current = current.next;
        }
    }

    show(){
        let current = this.head;
        while(current !== null){
            console.log(current.value);
            current = current.next;
        }
    }

    clear(){
        this.head = null;
    }


    size(){
        let count = 0;
        let current = this.head;
        while(current !== null){
            count++;
            current = current.next;
        }
        return count;
    }

}

const linkedList = new LinkedList();
linkedList.add('A');
linkedList.add('B');
linkedList.add('C');
linkedList.add('D');
//linkedList.show();

//*EJEMPLO de uso ListaEnlazada

const title = document.getElementById('title');
const image = document.getElementById('image');
const divNext = document.getElementById('next');

const moviesList = new LinkedList();
moviesList.add({ name: 'GodFather', picture: 'img/mov1.png'})
moviesList.add({ name: 'Malefica', picture: 'img/mov2.png'})
moviesList.add({ name: 'Avengers', picture: 'img/mov3.png'})

function showMovie(){
    const movie = moviesList.head.value;

    title.innerHTML = movie.name;
    image.src = movie.picture;

    if(moviesList.head.next){
        const movieNext = moviesList.head.next.value;
        divNext.innerHTML = `Siguiente: ${movieNext.name}`
    }else{
        divNext.innerHTML = 'No hay mas Portadas :(';
    }
}

function nextMovie(){
    if(moviesList.head.next){
        moviesList.delete(moviesList.head.value);
        showMovie();
    }
}

showMovie();