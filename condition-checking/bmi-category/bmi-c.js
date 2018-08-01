/*
 * author: Jackson Currie
 *   date: 2018-03-21
 *   desc: BMI Calculator with categories
 */ 

// Declare variables

var weight = 0; // kg
var height_cm = 0; // cm
var height_m = 0; // m
var bmi = 0; // weight / ( height * height )
var category = '';

// Ask for weight and height

weight = Number( prompt( 'Body Mass Index (BMI) Calculator\nEnter your weight (kg):' ) );
height_cm = Number( prompt( 'Enter your height (cm):' ) );

// Convert height into m

height_m = height_cm/100;

// Work out BMI

bmi = weight / ( height_m * height_m );

// Check BMI category

if( bmi < 18.5 ) {

    category = 'Underweight';

} else if( bmi < 25 ) {

    category = 'Normal weight';

} else if( bmi < 30 ) {

    category = 'Overweight';

} else {

    category = 'Obese';

}

// Output BMI to 1 dp

console.log( `
Body Mass Index Calculator
--------------------------

Person's weight: ${weight} kg
Person's height: ${height_cm} cm
Body Mass Index: ${bmi.toFixed(1)}
--------------------------
BMI Category: ${category}
` );