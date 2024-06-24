let s = 'hackerhappy';

let t = 'hackerrank';

let k = 9;

// Convierto las cadenas en arrays

const s1 = s.split('');

const t1 = t.split('');

const equal = [];


for( let i = 0; i < s1.length; i++) {

    if( s1[i] === t1[i]) {
        equal.push(s1[i]);
    }
    else {
        break;
    }
}



if ( s1[s1.length - 1] != t1[t1.length - 1] && s1.length < t1.length) {
    if ( k - (s1.length) - (t1.length) >= 0) {
        return 'yes';
    }
    else {
        return 'No';
    }
}
else {
    if ( k - (s.length - equal.length) - (t.length - equal.length) >= 0)  {
        return 'yes';
    }
    else {
        return 'No';
    }
}

