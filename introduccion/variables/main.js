
var namePerson = "jesus"; //variable de ambito global
function print(n){
    let namePerson = n; //variable de ambito local
    console.log(namePerson);
}
print("fran")

/*
variables const, su valor no se puede modificar
*/
const nameThing = "Soda";
console.log(nameThing);

{ //ambito con las llaves
    const nameThing = "papas";
    console.log(nameThing);
}


