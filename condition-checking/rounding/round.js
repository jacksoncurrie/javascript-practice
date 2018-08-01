/*
 * author: Jackson Currie
 *   date: 2018-03-21
 *   desc: Number Rounding
 */ 

// Declare variables

var cent = 0;
var round = 'Down';

// Ask for last cent value

cent = Number( prompt( 'Program to determine what rounding to apply to cash transaction.\nEnter the last cent value of the transaction (1 to 9):' ) );

// Check if cent value is round up or down

switch( cent ) {

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:

        round = 'Down';
        break;

    case 6:
    case 7:
    case 8:
    case 9:

        round = 'Up';
        break;

    default:

        round = 'Incorrect input';
}

// Display result

console.log( `
Determine Rounding Type for a Cash Transaction
----------------------------------------------

Cash transaction ends with a: ${cent} cents
           Rounding to apply: ${round}
` );