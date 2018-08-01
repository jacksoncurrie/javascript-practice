/*
 * Author:       Jackson Currie
 * Date:         2018-04-06
 * Description:  Returns day name
 */

 // List of days

 const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

// Set day function

day = ( num ) => days[ num - 1 ];

// Get miles from user and output to console

console.log( day( Number( prompt( 'Enter the day number:' ) ) ) );

// End of program