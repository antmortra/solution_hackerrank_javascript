let x = 1;
let y = 2;
let z = 3;

let result;

if ( Math.abs(x-z)<Math.abs(y-z)) {

    result = 'Cat A';
}
else if ( Math.abs(x-z)>Math.abs(y-z) ) {

    result = 'Cat B';
}
else if ( Math.abs(x-z)==Math.abs(y-z)) {

    result = 'Mouse C';
}

return result;