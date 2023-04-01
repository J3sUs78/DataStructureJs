//una clase tiene objetos

//objeto creado de manera flexible
const jesus = new Object();
jesus.name = 'Jesus';
jesus.age = 19;

//clase
class Person{
    //asignando los valores a las propiedades
    constructor(name, lastname, age, foodfav){ 
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.foodfav = foodfav;
    }
    get hi(){
        return `hola soy ${this.name} y tengo ${this.age} años`
    }
    get favFood(){
        return `Yo ${this.name} ${this.lastname} amo la ${this.foodfav}.`
    }

}class Student extends Person{
    constructor(name, lastname, age,foodfav, career){ 
        super(name,lastname, age,foodfav);
        this.career = career;
    }
    get hi(){
        return super.hi+ " estudiante de "+this.career;
    }


}

//objeto Hijo
var maria = new Student("Maria", "Cuevas", 25, "cereal","Analista de Sistemas")
console.log(maria.hi)
console.log(maria.favFood)