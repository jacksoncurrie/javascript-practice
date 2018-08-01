/*
 * Author:       Jackson Currie
 * Date:         2018-04-06
 * Description:  Circle circumference and area
 */

// Set area function

function area( radius )
{
    // Return result of area
    return 3.14159265358979 * radius * radius;
}

// Set circumference function

function circum( radius )
{
    // Return result of circumference
    return 2 * 3.14159265358979 * radius;
}

// Get miles from user and output to console

let radius = Number( prompt( 'Enter the radius:' ) );
console.log( circum( radius ) + ' ' + area( radius ) );

// End of program