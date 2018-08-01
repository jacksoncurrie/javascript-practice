/*
 * Author:       Jackson Currie
 * Date:         2018-04-06
 * Description:  Calculate BMI category
 */

// Set BMI function

let bmi = ( height, weight ) => weight / (height * height);

// Set category function

function category( bmi )
{
    // Check MBI category
    
    if( bmi < 18.5 )
    {
        return 'Underweight';
    }
    else if( bmi < 25 )
    {
        return 'Normal Weight';
    }
    else if( bmi < 30 )
    {
        return 'Overweight';
    }
    else
    {
        return 'Obese';
    }
}

// Get weight and height from user

let weight = Number( prompt( 'Enter your weight (Kg):') ) ;
let height =  Number( prompt( 'Enter your height (cm):' ) ) / 100;

// Work out and output bmi

bmi = bmi( height, weight );
console.log( bmi );

// Find category

console.log( category( bmi ) );

// End of program