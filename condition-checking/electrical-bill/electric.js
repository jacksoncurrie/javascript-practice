/*
 * Author:      Jackson Currie (30005345)
 * Date:        2018-03-29
 * Description: Working out electrical bill
 */

// Initalise variables

let user_id = '';
let user_name = '';
let user_unit = 0;
let user_charge = 0;
let bill = 0;
let output = '';

// Set output header

output = `
This application will calculate the customer's Electricity Bill:
----------------------------------------------------------------
`;

// Get user's ID

user_id = prompt( 'Please enter the customer\'s ID number.' );

// Get user's name

user_name = prompt( 'Please enter the customers name.')

// Get users's units

user_unit = Number( prompt( `Please enter the number of units that ${user_name} has used.` ) );

// Add user's input to the output

output += `
ID:                                    ${user_id}
Name:                                  ${user_name}
Units:                                 ${user_unit}

Electricity Bill
----------------------------------------------------------------
`;

// Check what unit bracket customer falls into

// Bracket 1
if( user_unit < 200 )
{
    // Set charge for bracket 1
    user_charge = 1.20;
}
// Bracket 2
else if( user_unit >= 200 && user_unit < 400 )
{
    // Set charge for bracket 2
    user_charge = 1.50;
}
// Bracket 3
else if( user_unit >= 400 && user_unit < 600 )
{
    // Set Charge for bracket 3
    user_charge = 1.80;
}
// Bracket 4
else if( user_unit >= 600 )
{
    // Set charge for bracket 4
    user_charge = 2.00;
}

// Work out change per unit

bill = user_unit * user_charge;

// Set results to two deciaml places

bill = bill.toFixed( 2 );
user_charge = user_charge.toFixed( 2 );

// Add bill charge to output

output += `The total owing @ ${user_charge} per unit is:     $${bill}`

// Display result to console

console.log( output );

// End of program