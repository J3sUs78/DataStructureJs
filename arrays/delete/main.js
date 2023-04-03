const names = ["Jesus", "Noskin", "Lukas", "Maury", "Pato", "Benja", "Valita", "Noskin", "Noskin"];

//*Modo Estructurado
function removeName(array, name) {
    const newArray = [];
    for (const names of array) {
        if (names !== name)
            newArray.push(names);
    }
    return newArray;
}

//*EN ESTA FUNCION ME AGREGA EL NOMBRE BUSCADO, PERO ELIMINA LAS COPIAS
function removeNameValidate(array, name) {
    const newArray = [];
    let foundFirst = false;  // bandera para indicar si ya encontramos la primera ocurrencia
    for (const names of array) {
        if (names === name && !foundFirst) {
            newArray.push(names);  // agregamos el primer nombre que encontramos
            foundFirst = true;  // indicamos que ya encontramos la primera ocurrencia
        } else if (names !== name) {
            newArray.push(names);  // agregamos nombres diferentes al buscado
        }
    }
    return newArray;
}

//*usando Funciones
function removeName2(array, name) {
    return array.filter((name_indx) => name_indx !== name);
}

console.log("Test 1: ", removeName(names, "Noskin"))
console.log("Test 2: ", removeName2(names, "Noskin"))
console.log("Test 3: ", removeNameValidate(names, "Noskin"))