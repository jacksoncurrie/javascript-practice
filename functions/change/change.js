/*
 * Author:       Jackson Currie
 * Date:         2018-04-06
 * Description:  Calculate change rounding
 */


// Set rounding function

function rounding( cent )
{
    // Check rounding
    
    switch( cent )
    {
        // Round down
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:

            return 'Down';
            break;

        // Round up
        case 6:
        case 7:
        case 8:
        case 9:

            return 'Up';
    }
}

// Get cent value

let cent = Number( prompt( 'Enter your cent value:') ) ;

// Work out and output rounding

console.log( rounding( cent ) );

// End of program