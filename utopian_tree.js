const n = 4;

// Creamos un ciclo que recorra uno por uno la cantidad de n

let height = 0;

for( let i = 0; i <= n; i++) {

    if( i % 2 != 0) {
        height = height * 2;
    }
    if( i % 2 == 0) {
        height++;
    }
};

console.log(height);

return height;

