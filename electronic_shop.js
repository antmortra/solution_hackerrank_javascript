

const buy = [];

keyboards.forEach( el => {

    const tempt = [];

    drives.forEach( (el2) => {

        if ( el + el2 < b ) {

            tempt.push(el+el2);
        }
    })
    
    buy.push(tempt);
});

const result = buy.flat();

let solution;

if (result.find(value => value <= b != 0) ) {

    solution = Math.max.apply(null, result);
}
else {
    solution = -1;
}

return solution;


