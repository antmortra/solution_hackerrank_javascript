
const h = [4, 2, 1, 2, 3, 4, 3, 7, 4, 1, 5, 6, 1, 3, 2, 6, 6, 3, 7, 3, 1, 1, 5, 1, 1, 4];

const word = 'qjhwkcexec';


// Creo un array con el abecedario para buscar luego el indice de la letra con mayor indice.

const abecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l' , 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Pasar la palabra a un array y transformarlo en los indices

const letter = Array.from(word).sort();

console.log(letter);

const index = [];

for( let i = 0; i < letter.length; i++) {

    index.push(abecedario.indexOf(letter[i]));
}

console.log(index)

const solution = [];

// Ahora buscamos el valor de esos indices dentro de la variable h

index.forEach( a => {

    solution.push(h[a]);
});

console.log(solution);

// Hayamos el mayor elemento dentro del array

let x = Math.max(...solution);

console.log(x *word.length)

return x * word.length;




