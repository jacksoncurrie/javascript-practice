let x = 0;
let y = 0;
let z = 0;

let smallest = 0;
let middle = 0;
let biggest = 0;

x = Number( prompt( 'Choose a number:' ) );
y = Number( prompt( 'Choose a number:' ) );
z = Number( prompt( 'Choose a number:' ) );

if( x < z && x < y ) {

    smallest = x;

    if( z < y ){

        middle = z;
        biggest = y;

    } else {

        middle = y;
        biggest = z;

    }

} else if( z > y ) {

    smallest = y;

    if( x < z ){

        middle = x;
        biggest = z;

    } else {

        middle = z;
        biggest = x;

    }

} else {

    smallest = z;

    if( x < y ){

        middle = x;
        biggest = y;

    } else {

        middle = y;
        biggest = x;

    }

}

console.log( `${smallest}, ${middle}, ${biggest}.`);
