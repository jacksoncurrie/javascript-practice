/*
 * author: Jackson Currie
 *   date: 2018-03-22
 *   desc: List Odd Numbers
 */

 // Initalise variables

 var char = ''
 var loop = 0;
 var change = 1;
 output = '';

 // Get user inputs

char = prompt( 'Enter the character/symbol to be repeated:' );
loop = Number( prompt( 'How many times to repeat?' ) );

console.log( `Repeat ${char} ${loop} times.`)

 // Loop and output for loop

 console.log( `>>> For loop <<<`);

 for( var i = 1; i <= loop; i++ ) {

    output += char;

 }

 console.log( output );

 // while loop

 output = '';

 console.log( `>>> While loop <<<`);

 while( change <= loop ) {

    output += char;

    change++;

 }

 console.log( output );

 // do while loop

 output = '';
 change = 1;

 console.log( `>>> Do While loop <<<`);

 do {

    output += char;

    change++;

 } while( change <= loop );

 console.log( output );

 // End

