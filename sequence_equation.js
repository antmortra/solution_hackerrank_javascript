const p = [5, 2, 1, 3, 4];

const y = [];

for( let i = 1; i <= p.length; i++) {

    let px = 0;

    px = p.indexOf(i) + 1;

    y.push(p.indexOf(px) + 1);
};

return y;

