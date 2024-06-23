

// Tenemos que crear un nuevo array rotando los indices tantas veces como el valor de k

let round = k % a.length;

console.log(round);

let count = 0;

    for( let i = a.length - 1; i >= 0; i--) {

        if (count < round) {

            a.unshift(a[a.length - 1]); 
            a.pop();
            count++; 
        }
    };

// Retornamos los indices del nuevo array con los valores de queries

const result = [];

for( let i = 0; i < queries.length; i++) {

     result.push(a[queries[i]]);
};

return result;