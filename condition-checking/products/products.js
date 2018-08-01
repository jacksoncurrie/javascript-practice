let output = 'The products of these numbers are ';
let x = 0;
let y = 0;
let z= 0;

x = prompt('Enter a number:');
y = prompt('Enter a number:');
z = prompt('Enter a number:');

if( x > 0 && y > 0 && z > 0 ) {

    output += 'positive.';

} else if( x < 0 && y < 0 && z > 0 ) {

    output += 'positive.';

} else if( x < 0 && z < 0 && y > 0 ) {

    output += 'positive.';

} else if( y < 0 && z < 0 && x > 0 ) {

    output += 'positive.';

} else {

    output += 'negative.'
}

console.log( output );