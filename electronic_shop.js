let b = 60;

const keyboard = [40, 50, 60];
const drives = [5, 8, 12];

const buy = [];

keyboard.forEach( (el) => {
    // console.log(el);

    const tempt = [];

    drives.forEach( (el2) => {
        // console.log(el2)

        if ( el + el2 < 60 ) {

            tempt.push(el+el2);
        }
    })
    console.log(tempt)
    buy.push(tempt);
});

const solution = buy.flat();
// console.log(solution);
return Math.max.apply(null, solution);
