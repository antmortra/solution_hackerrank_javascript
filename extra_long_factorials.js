let n = 25;

// Creamos un ciclo que multiplique en cada iteración el valor de i por n decrementando en uno cada iteración

let solution = BigInt(n);

for(let i = n - 1; i >=1 ; i--) {
    solution = solution * (BigInt(n) - BigInt(i));
}

console.log(solution.toString());

