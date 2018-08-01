/*
 * Author:       Jackson Currie <30005345@student.toiohomai.ac.nz>
 * Date:         2018-04-05
 * Description:  Get and display medal winners
 */

// Initialize variables

let medals = [];
let input = '';
let message = '';
let output = '';

// Set input message constant

message += `
****************************************************
*** Welcome to the CrankWorx Medal Awards ***
****************************************************

Enter the name for the `;

// Set output message constant

output += 'That medal winner is: ';

// Get medal input and add it to medal array

input = prompt( message + 'GOLD medal winner:' );
medals.push( input );

input = prompt( message + 'SILVER medal winner:' );
medals.push( input );

input = prompt( message + 'BRONZE medal winner:' );
medals.push( input );

// Ask for medal to display and add to output

input = prompt( 'Which medal holder would you like to see displayed?');
output += medals[ input - 1 ];

// Display medal to user

confirm( output );

// End of program
