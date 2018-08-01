/*
 * author: Jackson Currie
 *   date: 2018-03-22
 *   desc: List Odd Numbers
 */

 // Initalise variables

 var START = 76;
 var END = 46;

 var count = START;

 console.log( `Display odd numbers between ${START} to ${END} (descending):` );

 // Loop numbers

 while( count >= END ) {

    // Check if number is odd
    
    if( count % 2 != 0 ) {

        // Output odd number to screen

        console.log( count );

    }

    count--;

 }

 console.log( 'Program end' );
 
 // End