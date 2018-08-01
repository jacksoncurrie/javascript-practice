/*
 * name: Jackson Currie
 * date: 15/03/2018
 *   id: 30005345
 */

function loopNumber( number ) {

    // Initalise variables

    let forElement = document.getElementById( 'for' );
    let whileElement = document.getElementById( 'while' );
    let dowhileElement = document.getElementById( 'dowhile' );
    let forResult = "<h2>For Loop</h2><p>";
    let whileResult = "<h2>While Loop</h2><p>";
    let dowhileResult = "<h2>Do While Loop</h2><p>";
    let start = 1;

    // Empty result elements

    forElement.innerHTML = "";
    whileElement.innerHTML = "";
    dowhileElement.innerHTML = "";

    // Check there are correct inputs

    if( number == "" ) {

        forElement.innerHTML = "No input." ;
        return;

    }

    // For loop

    for( var i = 1; i <= 10; i++ ) {

        forResult += i + " x " + number + " = " + i*number + "<br>";

    }

    forResult += "</p>";

    // While loop

    while( start <= 10 ) {

        whileResult += start + " x " + number + " = " + start*number + "<br>";
        start++;

    }

    whileResult += "</p>";

    // Do While Loop

    start = 1;

    do {
        
        dowhileResult += start + " x " + number + " = " + start*number + "<br>";
        start++;

    } while (  start <= 10 );

    dowhileResult += "</p>";

    // Display output

    forElement.innerHTML = forResult;
    whileElement.innerHTML = whileResult;
    dowhileElement.innerHTML = dowhileResult;
}