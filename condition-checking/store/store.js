/*
 * name: Jackson Currie
 * date: 15/03/2018
 *   id: 30005345
 */

// Initalise variables

var finalCost = 0;
var element = document.getElementById( 'result' );
var result = "<h2>Purchases</h2><p>";

function checkCost( cost ) {

    // Check Guess

    if( cost == "" ) {

        result += "End</p><p>Total: $" + finalCost + "</p>";
        element.innerHTML = result;
        result += "<h2>Purchases</h2>";
        finalCost = 0;
        return;

    } else {

        finalCost += +cost;
        result += "Purchase: $" + cost + "<br>";
        element.innerHTML = result;

    }

}