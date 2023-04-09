class Node{ //*Una estructura que tiene un valor, y un nodo left y rigth
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//*En los arboles binarios, esta left(valor,menor al nodo actual) y esta right(valor, mayor al nodo actual)
//*Son los nodos que se encuentran en el arbol.
class BinarySearchTree{
    constructor(){
        this.root = null;
    }


    insert = (value) => {
        const node = new Node(value);
        if(!this.root){ //*Primer caso, el arbol es nuevo
            this.root = node;
            return
        }
        let current = this.root;
        while(true){
            if(value === current.value)break;//*Si es el mismo elemento, entonces no se inserta
            if(value < current.value){ //*en el lado izquierdo van los que son menores
                if(current.left === null){
                    current.left = node;
                    break;
                }
                current = current.left; //*current toma el nodo que este en la izquierda
            }else{
                if(current.right === null){
                    current.right = node;
                    break;
                }
                current = current.right;
            }
        }
    }

    search = (value) => {
        if(this.root === null) return false;
        //*raiz
        let current = this.root;
        
        let i = 0;
        while(current){
            //console.log(++i);
            if(value === current.value) return current;
            if(value < current.value){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return false;
    }

    //Recorridos
    showInOrder(node){
        if(node === undefined){
            node = this.root;
        }

        if(node !== null){
            this.showInOrder(node.left);
            console.log(node.value);
            this.showInOrder(node.right);
        }
    }

    showInPreOrder(node){
        if(node === undefined){
            node = this.root;
        }

        if(node !== null){
            console.log(node.value);
            this.showInPreOrder(node.left);
            this.showInPreOrder(node.right);
        }
    }

    showInPostOrder(node){
        if(node === undefined){
            node = this.root;
        }

        if(node !== null){
            this.showInPostOrder(node.left);
            this.showInPostOrder(node.right);
            console.log(node.value);
        }
    }

}

function recursiveShowMesagge(n){

    if(n === 0) return;

    recursiveShowMesagge(n-1);
}

const tree1 = new BinarySearchTree();
tree1.insert(5);
tree1.insert(9);
tree1.insert(1);
tree1.insert(8);
tree1.insert(7);
tree1.insert(2);
tree1.insert(0.2);
tree1.insert(4);

//console.log(tree1);
//console.log(tree1.search(2));
//tree1.showInOrder();

const treeNumbers = new BinarySearchTree();

let json = [];

for (let index = 0; index < 30000; index++) {   
    const num = Math.floor(Math.random()*30000);
    json.push(num);
    treeNumbers.insert(index);
}
console.log(json);

const numberToSearch = 5006;

//busqueda lineal

let exists = false;

const start = Date.now();

for(let n of json){
    if(n === numberToSearch){
        exists = true;
        break;
    }
}

const end = Date.now();

if(exists){
    console.log("nombre existe");
}else{
    console.log("nombre NO existe");
}
console.log(`El tiempo de ejecucion en busqueda lineal fue: ${end- start} ms`);

console.log("***************************");

const startTree = Date.now();

if(treeNumbers.search(numberToSearch)){
    console.log("nombre existe");
}else{
    console.log("nombre NO existe");
}

const endTree = Date.now();

console.log(`El tiempo de ejecucion en busqueda arbol fue: ${endTree- startTree} ms`);