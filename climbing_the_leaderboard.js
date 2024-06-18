const ranked = [100, 90, 90, 80];

const player = [70, 80, 105];

const simpleRanked = [];

// primero eliminamos los duplicados de la lista de ranking
for ( let i = 0; i < ranked.length; i++) {

    if (ranked[i] > ranked[i+1] || [i+1] == ranked.length) {
        simpleRanked.push(ranked[i])
    }  
}

const solution = [];

let j = simpleRanked.length - 1;

// vamos comparando resultados sin tener que reiniciar desde el principio para ser mas eficiente.

for (let i = 0; i < player.length; i++) {
    while (j >= 0 && player[i] >= simpleRanked[j]) {
        j--;
    }
    solution.push(j + 2);
}

return solution;

