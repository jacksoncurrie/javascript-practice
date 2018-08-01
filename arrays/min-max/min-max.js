/*
 * Author:       Jackson Currie
 * Date:         2018-04-06
 * Description:  Finding min and max
 */

// Initalize variables

let numbers = new Array( 5 );
let min = 0;
let max = 0;

// Get numbers

for( let i = 0; i < 5; i++ )
{
    numbers[ i ] = Number( prompt( `Enter number ${ +i + 1 }:` ) );
}

// Find min and max

min = numbers[ 0 ];
max = numbers[ 0 ];

for( let j in numbers )
{
    if( numbers[ j ] > max )
    {
        max = numbers[ j ];
    }
    else if( numbers[ j ] < min )
    {
        min = numbers[ j ];
    }
}

// Output result

console.log( `Smallest: ${ min }\nLargest: ${ max }` );

// End of program