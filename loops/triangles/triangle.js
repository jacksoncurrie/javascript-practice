/*
 * author: Jackson Currie
 *   date: 2018-03-22
 *   desc: Make Triangle
 */

 // Initalise variables

 var outputA = '';
 var outputB = '';
 var outputS = '';

 // Loop and output first triangle

console.log( 'Triangle A:')

 for( var i = 1; i <= 5; i++ ) {

    for( var j = 1; j <= i; j++ ){

        outputA += `${j} `;

    }

    console.log( outputA );
    outputA = '';

 }

 // Loop and output second triangle

 console.log( '\nTriangle B:')

 for( var k = 1; k <= 5; k++ ) {

    for( var l = 1; l <= k; l++ ){

        outputB += `${k} `;

    }

    console.log( outputB );
    outputB = '';

 }

 // Loop and output star Triangle

 console.log( '\nTriangle of stars:')

 for( var a = 5; a >= 1; a-- ) {

    for( var b = 1; b <= a; b++ ){

        outputS += `*`;

    }

    console.log( outputS );
    outputS = '';

 }