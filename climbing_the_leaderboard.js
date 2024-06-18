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

    if( simpleRanked.includes(player[i]) == false) {

    simpleRanked.push(player[i]);

    simpleRanked.sort((a,b)=>b-a);

    solution.push((simpleRanked.indexOf(player[i])) + 1);
    }
    else {
        solution.push((simpleRanked.indexOf(player[i])) + 1);   
    }
}

return solution;

