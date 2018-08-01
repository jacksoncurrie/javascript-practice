/*
 * author: Jackson Currie
 *   date: 2018-03-22
 *   desc: Add up Rainfall
 */ 

 // Initalise variables

 var rain = 0;
 var total = 0;

 // Begin to loog results after heading

 console.log( `
Rainfall (mm) for the Year
--------------------------

`);

 // Get rainfall input from user for 12 months and log in to screen

 for( var i = 1; i <= 12; i++ ) {

    rain = Number( prompt( `Determine the total rainfall for the year.\nEnter the rainfall for month ${i}` ) );
    console.log( `Rainfall for month ${i}: ${rain}` );

    // Add up total rainfall
    total += rain;

 }

 // Output total rainfall

 console.log( `
       Total rainfall: ${ total.toFixed( 1 ) }
`);

// End