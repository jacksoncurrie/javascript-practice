/*
 * Author:      Jackson Currie (30005345)
 * Date:        2018-03-29
 * Description: Converting Temperatures
 */

// Initalise vaiables

let celcius = 0;
let fahrenheight = 0;
let output = '';

// Set output header

output = `
This application will convert degrees Cecius to degrees Farenheight:
--------------------------------------------------------------------
`;

// Get user input

celcius = Number( prompt( 'Please input a temperature in degrees Celcius to be converted:' ) );

// Convert to fahrenheight

fahrenheight = celcius * 18 / 10 + 32;

// Add result to output

output += `${celcius} degrees celcius is equal to ${fahrenheight} degrees fahrenheight`;

// Display output to console

console.log( output );

// End of program