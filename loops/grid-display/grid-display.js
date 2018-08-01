/*
 * name: Jackson Currie
 * date: 15/03/2018
 *   id: 30005345
 */

var element = document.getElementById( 'result' );
var result = "<h2>Grid A</h2><p>";

// Check Guess

for( var i = 1; i <= 4; i++ ) {

    for( var j = 0; j <= 2; j++ ) {

        result += i+j + " ";
    }

    result += "<br>";

}

result += "</p><h2>Grid B</h2><p>";

for( var i = 1; i <= 4; i++ ) {

    for( var j = 0; j <= 2; j++ ) {

        result += (i+j)*2 + " ";
    }

    result += "<br>";

}

element.innerHTML = result;