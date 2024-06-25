const arr = [1, 2, 3, 4, 3, 3, 2, 1];

const stick = [arr.length];


for( let i = Math.min(...arr); i < Math.max(...arr); i++) {

    let count = 0;

    arr.forEach( x => {

        console.log(x);
        if( i == x ) {
            
            count++;
        } 
    });
    console.log(count);
    if ( count != 0 ) {
        stick.push(stick[stick.length-1] - count);
    }
    count = 0;
};

console.log(stick);