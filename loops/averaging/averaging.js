/*
 * Author:      Jackson Currie (30005345)
 * Date:        2018-03-29
 * Description: Averaging 10 numbers
 */

// Initalise constants

const NUMBER_OF_INPUTS = 10;

// Initalising variables

let input = 0;
let total = 0;
let output = '';

// Set output header

output = `
This application will find the average of ten numbers:
------------------------------------------------------
`;

// Loop for the 10 inputs

for( var i = 1; i <= NUMBER_OF_INPUTS; i++ )
{
    // Get user input for each number

    input = Number( prompt( `Please enter number ${i}` ) );

    // Add user input to total

    total += input;

    // Add users input to output

    output += `Number ${i}: ${input}\n`;
}

// Work out average

average = total / NUMBER_OF_INPUTS;

// Display average to output

output += `The average of those ${NUMBER_OF_INPUTS} numbers is ${average}`

// Log output to console

console.log( output );

// End of program