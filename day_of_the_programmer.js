
const juliano = [31 , 28, 31, 30, 31, 30, 31, 31];

const julianobis = [31 , 29, 31, 30, 31, 30, 31, 31];

const transicion = [31, 15, 31, 30, 31, 30, 31, 31];

let result;

let day = juliano.reduce((total, value) => total + value);

let dayProg = 256 - day;

let day2 = julianobis.reduce((total, value) => total + value);

let dayProg2 = 256 - day2;

let dayTr = transicion.reduce((total, value) => total + value);

let dayProgTr = 256 - dayTr;


if ( year < 1918 && year % 4 != 0 ) {

    result = dayProg + '.09.' + year;
}
else if ( year < 1918 && year % 4 == 0 ) {

    result = dayProg2 + '.09.' + year;
}
else if ( year == 1918 ) {

    result = dayProgTr + '.09.' + year;
}
else if ( year > 1918 && year % 4 != 0 ) {

    result = dayProg + '.09.' + year;
}
else if ( year > 1918 && year % 400 == 0 ) {

    result = dayProg2 + '.09.' + year;
}
else if ( year > 1918 && year % 4 == 0 && year % 100 != 0 ) {

    result = dayProg2 + '.09.' + year;
}
else {

    result = dayProg + '.09.' + year;
}

return result;
