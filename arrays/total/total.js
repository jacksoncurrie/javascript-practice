/*
 * Author:       Jackson Currie
 * Date:         2018-04-06
 * Description:  Adding total numbers entered
 */

// Initalize variables

let numbers = [];
let amount = 0;
let total = 0;

// Get number of items

amount = Number( prompt( 'How many numbers?' ) );

// Get numbers and add to total

for( let i = 0; i < amount; i++ )
{
    input = Number( prompt( `Enter number ${ +i + 1 }:` ) );
    numbers.push( input );
    total += input;
}

// Output result

for( let j = 0; j < amount; j++ )
{
    console.log( `Number ${ +j + 1 }: ${ numbers[ j ] }`)
}

console.log( `Total: ${ total }` );

// End of program