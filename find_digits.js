let n = 124;

// En primer lugar tenemos que convertir n en un array con cada numero separado en un indice.

const arr = n.toString().split('').map(Number);

console.log(arr);
// Con el nuevo array dividimos n por cada indice de arr y contamos uno por cada indice que es divisible por n.

let count = 0;

for(let i = 0; i < arr.length; i++) {

    if(n % arr[i] == 0) {
        count++;
    }
};

console.log(count);

return count;