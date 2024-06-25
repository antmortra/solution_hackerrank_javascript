

if( y2 > y1 || y2 == y1 && m2 > m1 || y2 == y1 && m2 == m1 && d2 >= d1 ) {

    return 0;
}
else if( y1 - y2 > 0) {

    return 10000;
}
else if( m1 - m2 > 0 ) {

    return 500 * (m1 - m2);
}
else if( d1 - d2 > 0 ) {

    return 15 * (d1 - d2);
}
