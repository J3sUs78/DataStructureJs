const names = ["Jesus", "Noskin", "Lukas", "Maury", "Pato", "Benja", "Valita"];


//*Este metodo es inmutable osea no modifica el array
function searchFirstLetter(array, letter){
    const name = [];
    for (const word of array){
        if (word.charAt(0).toUpperCase() === letter.toUpperCase())
            name.push(word);        
    }
    if(name.length === 0)
        console.log("No se encontro el Nombre...")
    return name;
}

//*Funcion filter, retorna un nuevo array, apartir de la funcion que le des, es un metodo inmutable. y es una funcion de orden superior
function searchFirstLetter2 (array,letter){
    const newCollection = array.filter(word =>
        word.charAt(0).toUpperCase() === letter.toUpperCase()); 
    return newCollection;
}

console.log(searchFirstLetter(names,"J"));
console.log("********************");
console.log(searchFirstLetter2(names,"J"));