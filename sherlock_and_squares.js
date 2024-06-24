let a = 3;
let b = 9;

// Crear un ciclo para calcular que numero elevado al cuadrado esta en ese rango

let count = 0;

for(let i = Math.floor(Math.sqrt(a)); i <= Math.ceil(Math.sqrt(b)); i++) {

    if( i**2 >=a && i**2 <= b) {

        count++;
    }
}

console.log(count);

return count;