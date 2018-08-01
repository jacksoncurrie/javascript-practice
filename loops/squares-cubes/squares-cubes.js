/*
 * name: Jackson Currie
 * date: 15/03/2018
 *   id: 30005345
 */

window.onload = function() {

    // Initalise variables

    let forElement = document.getElementById( 'for' );
    let whileElement = document.getElementById( 'while' );
    let dowhileElement = document.getElementById( 'dowhile' );
    let forResult = "<h2>For Loop</h2><p>";
    let whileResult = "<h2>While Loop</h2><p>";
    let dowhileResult = "<h2>Do While Loop</h2><p>";
    let start = 0;

    // For loop

    for( var i = 0; i <= 10; i++ ) {

        forResult += i + ", " + i*i + ", " + i*i*i + ".<br>";

    }

    forResult += "</p>";

    // While loop

    while( start <= 10 ) {

        whileResult += start + ", " + start*start + ", " + start*start*start + ".<br>";
        start++;

    }

    whileResult += "</p>";

    // Do While Loop

    start = 0;

    do {
        
        dowhileResult += start + ", " + start*start + ", " + start*start*start + ".<br>";
        start++;

    } while (  start <= 10 );

    dowhileResult += "</p>";

    // Display output

    forElement.innerHTML = forResult;
    whileElement.innerHTML = whileResult;
    dowhileElement.innerHTML = dowhileResult;
}