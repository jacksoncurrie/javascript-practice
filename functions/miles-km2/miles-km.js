/*
 * Author:       Jackson Currie
 * Date:         2018-04-06
 * Description:  Changing miles to KM
 */

// Set change function

change = ( miles ) => miles / 0.62137;

// Get miles from user and output to console

console.log( change( Number( prompt( 'Enter number of miles:' ) ) ) );

// End of program