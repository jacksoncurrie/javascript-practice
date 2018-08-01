/*
 * Author:       Jackson Currie <30005345@student.toiohmai.ac.nz>
 * Date:         2018-04-05
 * Description:  Get and output names
 */

// Initalize constansts

const NUMBER_OF_NAMES = 5;

// Initalize variables

let message = '';
let input = ''
let ouptut = '';
let names = [ NUMBER_OF_NAMES ];

// Set input message constant

message += 'Enter 5 names.\n';

// Loop for users input

for( var i = 0; i < NUMBER_OF_NAMES; i++ )
{
    input = prompt( `${ message }Enter name ${ +i + 1 }:` );
    names[ i ] = input;
    console.log( `${ +i + 1 }. ${ input }`)
}

// Output the first and last name

console.log(`
The first name entered is:  ${ names[ 0 ] }
The last name entered is:   ${ names[ NUMBER_OF_NAMES - 1 ] }
`);

// End of program