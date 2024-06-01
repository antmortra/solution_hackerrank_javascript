
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
