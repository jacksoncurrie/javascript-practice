/*
 * name: Jackson Currie
 * date: 15/03/2018
 *   id: 30005345
 */

function loopNumber( num1, num2 ) {

    // Initalise variables

    let forElement = document.getElementById( 'for' );
    let whileElement = document.getElementById( 'while' );
    let dowhileElement = document.getElementById( 'dowhile' );
    let forResult = "<h2>For Loop</h2><p>";
    let whileResult = "<h2>While Loop</h2><p>";
    let dowhileResult = "<h2>Do While Loop</h2><p>";
    let start = +num1;

    // Empty result elements

    forElement.innerHTML = "";
    whileElement.innerHTML = "";
    dowhileElement.innerHTML = "";

    // Check there are correct inputs

    if( num1 == "" || num2 == "" || +num1 > +num2 ) {

        forElement.innerHTML = "Incorrect input." ;
        return;

    }

    // For loop

    for( var i = start; i <= num2; i++ ) {

        forResult += i + ", " + i*10 + ", " + i*100 + ", " + i*1000 + ".<br>";

    }

    forResult += "</p>";

    // While loop

    while( start <= num2 ) {

        whileResult += start + ", " + start*10 + ", " + start*100 + ", " + start*1000 + ".<br>";
        start++;

    }

    whileResult += "</p>";

    // Do While Loop

    start = +num1;

    do {
        
        dowhileResult += start + ", " + start*10 + ", " + start*100 + ", " + start*1000 + ".<br>";
        start++;

    } while (  start <= num2 );

    dowhileResult += "</p>";

    // Display output

    forElement.innerHTML = forResult;
    whileElement.innerHTML = whileResult;
    dowhileElement.innerHTML = dowhileResult;
}