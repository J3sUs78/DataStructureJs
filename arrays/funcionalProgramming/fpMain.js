//*Funcion de primera clase, se puede guardar en variable

function hp(in_name) {
    const stats = {
        name: in_name,
        hp: 150,
        hp_max: 300,
        hp_actual: 100
    };
    return stats;
}

class NPC {
    constructor({ name, hp, hp_max, hp_actual }) {
        this.name = name;
        this.hp = hp;
        this.hp_max = hp_max;
        this.hp_actual = hp_actual;
    }

    get myActualHp() {
        return `Tengo ${this.hp_actual} pts de vida.`;
    }

    get sayHi() {
        return `Hola, soy  ${this.name}.`;
    }
}

const stats = hp;
const mynpc = new NPC(stats("jesus"));

console.log(mynpc);
console.log(mynpc.myActualHp); // Output: Tengo 100 de HP, mi nombre es jesus.

//primera clase ejemlo
function sum(a, b) {
    return a + b;
}

//*Al mandar una variable con una funcion, puedo usar esas variables como parametros en otras funciones.

//*Por ejemplo, si quiero hacer una funcion que me devuelva el nombre de una variable, puedo hacerlo asi:

//*Funcion de orden superior
function otrasFunc(fn, arg) {

    console.log("Code begin");
    fn(arg);
    console.log("Code after");
}

//*funcion anonima llamando 
const utilitiesNpc = (npc) => {
    console.log(npc.sayHi);
    console.log(npc.myActualHp);

    const reduceHp = () => {
        npc.hp_actual -= 10;
        console.log(`Mi nuevo HP actual es ${npc.hp_actual}`);
    }
    reduceHp();
}

otrasFunc(utilitiesNpc, mynpc);

//*Funcion de orden superior ejecuta funcion con parametros
function npcSum(fn, num1, num2) {
    console.log("************")
    const res = fn(num1, num2);
    return console.log("Los numeros sumados son:", res);
}
//asignacion de la funcion sum dentro de la variable suma_basica
const suma_basica = sum;

npcSum(suma_basica, 5, 5);

//*Utilidad de la funcion anonima, es mas directa al uso, ya que usa la utilidad en esa instancia directamente
npcSum((num1, num2) => {
    const res = num1 + num2;
    console.log("La suma es:", res);
}, 5, 5);
