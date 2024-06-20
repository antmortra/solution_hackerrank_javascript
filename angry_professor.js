let k = 3;

const a = [-1, -3, 4, 2];

// En primer lugar tenemos que saber cuantos alumnos llegan temprano

const aOnTime = a.filter( value => value <= 0);

// aOnTime.length contiene el numero de alumnos que llegan temprano

// Ahora tenemos que ver cuantos alumnos quiere el profesor en clase y retornar si se cancela o no la clase

if( aOnTime.length >= k ) {

    return 'NO';
}
else {

    return 'YES';
}