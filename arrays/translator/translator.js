/*
 * Author:       Jackson Currie <30005345@student.toiohmai.ac.nz>
 * Date:         2018-04-05
 * Description:  Translate "hello"
 */

// Initalize variables

let language = { MAORI : 'Kia ora', JAPANESE : 'Kon\'nichiwa', HINDI : 'Namaste', FRENCH : 'Bonjour', SAMOAN : 'Talofa' };
let message = '';
let input = '';
let result = '';

// Set input message constant

message += `
I can translate \'hello\' in 5 different languages:
Maori, Japanese, Hindi, Fench, and Samoan.

Which language do you wish to see?
`;

// Get language input

input = prompt( message );
result = input.toUpperCase();

// Output the translation

confirm( `\'Hello\' in ${ input } is: ${ language[ result ] } ` );

// End of program