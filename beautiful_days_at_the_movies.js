// En primer lugar creo un array con todos los dias para ir al cine

let i = 20;

let j = 23;

let k = 6;

const dayMovies = [];

for( let x = 0; x <= (j - i); x++) {

    if ( i + x <= j ) {

        dayMovies.push(x+i);
    }
};

console.log(dayMovies);

// Ahora hay que calcular como invertir los números

/* let inverse = parseFloat(dayMovies[y].toString().split('').reverse().join('')); */



// Recorremos el array calculando los beautiful days

let beautifulDays = 0;

for( let y = 0; y < dayMovies.length; y++) {

    let inverse = parseFloat(dayMovies[y].toString().split('').reverse().join(''));

    if( Number.isInteger((dayMovies[y] - inverse) / k) == true ) {

        beautifulDays++;
    }
};

return beautifulDays;


