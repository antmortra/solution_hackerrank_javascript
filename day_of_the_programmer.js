
let year = 1801;

const juliano = [31 , 28, 31, 30, 31, 30, 31, 31];

const julianobis = [31 , 29, 31, 30, 31, 30, 31, 31];

const transicion = [31, 15, 31, 30, 31, 30, 31, 31];

let day = juliano.reduce((total, value) => total + value);
// console.log(day);

let dayProg = 256 - day;
// console.log(dayProg);
let day2 = julianobis.reduce((total, value) => total + value);
// console.log(day2);

let dayProg2 = 256 - day2;
// console.log(dayProg2);

let dayTr = transicion.reduce((total, value) => total + value);
// console.log(dayTr);

let dayProgTr = 256 - dayTr;
// console.log(dayProgTr);

if ( year < 2018 && year % 4 != 0 ) {

    console.log( 'dayProg' + '.' + '09' + '.' + 'year');
}
else if ( year < 2018 && year % 4 == 0 ) {

    console.log( 'dayProg2' + '.' + '09' + '.' + 'year');
}
else if ( year == 2018 ) {

    console.log( 'dayProgTr' + '.' + '09' + '.' + 'year');
}
else if ( year > 2018 && year % 4 != 0 ) {

    console.log( 'dayProg' + '.' + '09' + '.' + 'year');
}
else if ( year > 2018 && year % 4 == 0 && year % 400 == 0 && year % 100 != 0 ) {

    console.log( 'dayProg2' + '.' + '09' + '.' + 'year');
}
