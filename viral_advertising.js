let n = 5;

// Hacemos un ciclo para que recorra dia por dia y sumemos cuantas personas le dan like al anuncio

let cumulative = 0;
let share =  0;
let like = 0;

for( let i = 1; i <= n; i++) {

    if ( i == 1 ) {

        share = 5;
        like = Math.floor( share / 2);
        cumulative = cumulative + like;
    }
    else {

        share = like * 3;
        like = Math.floor( share / 2);
        cumulative = cumulative + like;
    }
};

return cumulative;