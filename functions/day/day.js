/*
 * Author:       Jackson Currie
 * Date:         2018-04-06
 * Description:  Returns day name
 */

// Set day function

function day( num )
{
    // List of days

    let days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

    // Return result of area

    return days[ num - 1 ];
}

// Get miles from user and output to console

console.log( day( Number( prompt( 'Enter the day number:' ) ) ) );

// End of program