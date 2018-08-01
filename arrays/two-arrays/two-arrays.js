/*
 * Author:       Jackson Currie
 * Date:         2018-04-06
 * Description:  Copying an array
 */

// Initalize variables

let numbers1 = [];
let numbers2 = [];
let input = '';

// Get numbers from user

for( let i = 0; i < 5; i++)
{
    input = Number( prompt( `Enter number ${ +i + 1 }:` ) );
    numbers1.push( input );
}

// Copy first array

for( let j of numbers1 )
{
    numbers2.push( j );    
}

// Output result

for( let k in numbers2 )
{
    console.log( `Number ${ +k + 1 }: ${ numbers2[ k ] }` );
}

// End of program