let energy = 100;

const c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0];

let k = 3;

for ( let i = 0; i < c.length; i = i + k) {

    if ( c.length - ( i + k ) > 0 ) {

        if ( c[i + k] == 0) {
            energy = energy - 1;
        }
        else {
            energy = energy - 3;
        }
    }    
    if ( c.length - ( i + k ) == 0 ) {

        if ( c[0] == 0) {
            energy = energy - 1;
        }
        else {
            energy = energy - 3;
        }
    }
    if ( c.length - ( i + k ) < 0) {
          
        if ( c[(i + k) - c.length] == 0) {
         energy = energy - 1;
        }
        else {
            energy = energy - 3;
        }

        i = (i + k) - c.length;

        if ( c[i + k] == 0) {
            energy = energy - 1;
        }
        else {
            energy = energy - 3;
        }
    }
}
    
console.log(energy);
