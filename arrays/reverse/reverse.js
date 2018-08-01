/*
 * Author:       Jackson Currie <30005345@student.toiohmai.ac.nz>
 * Date:         2018-04-05
 * Description:  Reverse numbers
 */

// Initalize variables

let numbers = new Array( 5 );
let input = '';
let output = '';

// Set output constant

output += `
Numbers displayed as entered:
-----------------------------
`;

// Get user input 

for( let i = 0; i <= 4; i++ )
{
    input = Number( prompt( 'Enter a number: ' ) );
    numbers[ i ] = input;
    output += `Number ${ +i + 1 }: ${ input }\n`
}

// Set output constant

output += `

Numbers displayed as entered:
-----------------------------
`;

// Reverse array

for( let j = 4; j >= 0; j-- )
{
    output += `Number ${ +j + 1 }: ${ numbers[ j ] }\n`
}

// Display output

console.log( output );

// end of program