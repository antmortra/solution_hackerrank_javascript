const ranked = [100, 90, 90, 80];

const player = [70, 80, 105];

const simpleRanked = [];

console.log(simpleRanked);

const solution = [];

for ( let i = 0; i < ranked.length; i++) {

    if (ranked[i] > ranked[i+1] || [i+1] == ranked.length) {
        simpleRanked.push(ranked[i])
    }  
}
console.log(simpleRanked);

for( let i = 0; i < player.length; i++) {

    if( player[i] < simpleRanked[simpleRanked.length - 1]) {

        solution.push(simpleRanked.length + 1)

        simpleRanked.push(player[i]);

        i++;
    }
    if ( player[i] >= simpleRanked[0]) { 

        solution.push(1);

        if ( player[i] > simpleRanked[0]) {

            simpleRanked.unshift(player[i])
        }
    }
    else {
        for( let j = simpleRanked.length - 1; j >= 0; j--) {

            if ( player[i] >= simpleRanked[j] && simpleRanked[j - 1] > player[i]) {

                solution.push(j + 1);
            }
            
        }
    }
}

return solution;

