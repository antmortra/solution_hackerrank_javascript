const height = [1, 6, 3, 5, 2];

const k = 4;


// Primero creo una variable para almacenar el numero de dosis que tenga que tomar

let dosis = 0;

// Busco el mayor numero dentro del array.

let maxHurdle = Math.max(...height);

console.log(maxHurdle);

dosis = maxHurdle - k;

if( dosis > 0 ) {

    return dosis;
}
else {
    return 0;
}