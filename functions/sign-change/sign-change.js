/*
 * Author:       Jackson Currie
 * Date:         2018-04-06
 * Description:  Changing sign of a number
 */

// Set sign change function

function changeSign( number )
{
    // Return result of sign change
    return number - ( number * 2 );
}

// Get number from user and output to console

console.log( changeSign( Number( prompt( 'Enter number:' ) ) ) );

// End of program