var random = Math.floor(Math.random()*10)+1;

function checkGuess( guess ) {

    // Initalise variables

    let element = document.getElementById( 'result' );
    let text = document.createTextNode( 'Nothing entered.' );
    let result = '';

    // Empty result element

    element.innerHTML = "";

    // Check Guess

    if( guess == '' ) {

        element.appendChild( text );

    } else if( guess == random ) {

        text = document.createTextNode( `That is correct my number was: ${random}` );
        element.appendChild( text );

    } else if( guess < random ) {

        text = document.createTextNode( 'Too low, try again.' );
        element.appendChild( text );

    } else if( guess > random ) {

        text = document.createTextNode( 'Too high, try again.' );
        element.appendChild( text );

    }
}