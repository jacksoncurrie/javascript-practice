/*
 *  Author:       Jackson Currie (30005345)
 *  Date:         2018-03-29
 *  Description:  Determining if a character entered by the user is a vowel, 
 *                or if it is a constant.
 */

// Initalise variables

let character = '';
let result = '';
let output = '';

// Set ouput header

output = `
This application determines if your input is a vowel or constant:
-----------------------------------------------------------------
`;

// Get character input

character = prompt( 'Enter a letter of the alphabet to determine if it is a vowel or a constant.')

// Check if the character is one of the vowels

switch( character )
{
    // Vowels (Upper Case)
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
    // Vowels (Lower Case)
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':

        // Set result to vowel
        result = 'vowel';
        break;
    
    // Not a vowel (Constant)
    default:

        // Set result to constant
        result = 'constant';
}

// Set the result output

output += `${character} is a ${result}`;

// Display output to console

console.log( output );

// End of program