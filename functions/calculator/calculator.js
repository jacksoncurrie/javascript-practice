/*
 * Author:       Jackson Currie
 * Date:         2018-04-06
 * Description:  Simple calculator
 */

// Set calculator

let calculate = ( num1, num2, operator ) =>
{
    // Check operator
    switch( operator )
    {
        case '+':

            // Add numbers
            return num1 + num2;
            break;

        case '/':

            // Divide numbers
            return num1 / num2;
            break;
        
        case '*':

            // Multiply numbers
            return num1 * num2;
            break;

        case '-':

            // Subtract numbers
            return num1 - num2;
    }
}

// Get weight and height from user

let num1 = Number( prompt( 'Enter first number:') ) ;
let num2 =  Number( prompt( 'Enter second number:' ) );
let operator = prompt( 'Enter oporator (+, -, *, or /):')

// Work out and output bmi

console.log( calculate( num1, num2, operator ) );

// End of program