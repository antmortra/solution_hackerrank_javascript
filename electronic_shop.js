let b = 10;

const keyboard = [3, 1];
const drives = [5, 2, 8];

const buy = [];

keyboard.forEach( (el) => {
    // console.log(el);

    const tempt = [];

    drives.forEach( (el2) => {
        // console.log(el2)

        if ( el + el2 < b ) {

            tempt.push(el+el2);
        }
    })
    console.log(tempt)
    buy.push(tempt);
});

const solution = buy.flat();
// console.log(solution);
// return Math.max.apply(null, solution);

console.log(Math.max.apply(null, solution))
