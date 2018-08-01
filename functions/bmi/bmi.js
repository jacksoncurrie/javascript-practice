/*
 * Author:       Jackson Currie
 * Date:         2018-04-06
 * Description:  Calculate BMI
 */

// Set BMI function

bmi = ( height, weight ) => weight / (height * height);

// Get miles from user and output to console

console.log( bmi( Number( prompt( 'Enter your height (cm):' ) ) / 100, Number( prompt( 'Enter your weight (Kg):') ) ) );

// End of program