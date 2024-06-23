let energy = 100;

const c = [0, 0, 1, 0, 0, 1, 1, 0];

let k = 2;

let jumps = 0;

for ( let i = 0; i < c.length; i = i + k) {

    if ( c.length - ( i + k ) != 0 ) {

        if ( c[i + k] == 0) {
            energy = energy - 1;
        }
        else {
            energy = energy - 3;
        }
        
        if ( i + k > c.length ) {
          
            if ( c[i + k] == 0) {
                energy = energy - 1;
            }
            else {
                energy = energy - 3;
            }

        i = (i + k) - c.length;
        }
    }
    else {

        if ( c[0] == 0) {
            energy = energy - 1;
        }
        else {
            energy = energy - 3;
        }
    }  
}

console.log(energy);
