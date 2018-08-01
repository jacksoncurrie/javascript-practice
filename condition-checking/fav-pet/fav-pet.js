function checkGuess( guess ) {

    // Initalise variables

    let element = document.getElementById( 'result' );
    let text = document.createTextNode( 'Nothing entered.' );
    let result = '';
    guessCheck = guess.toUpperCase();

    // Empty result element

    element.innerHTML = "";

    // Check Guess

    switch( guessCheck ) {
    
        case '':

            element.appendChild( text );
            break;

        case "RABBIT":

            text = document.createTextNode( `The ${guess} is not my favourite animal.` );
            element.appendChild( text );
            break;

        case "RAT":

            text = document.createTextNode( `The ${guess} is not my favourite animal.` );
            element.appendChild( text );
            break;

        case "CAT":

            text = document.createTextNode( `The ${guess} is not my favourite animal.` );
            element.appendChild( text );
            break;

        case "DOG":

            text = document.createTextNode( `Correct, the ${guess} is my favourite animal.` );
            element.appendChild( text );
            break;
        
        default:

            text = document.createTextNode( `${guess} was not on of the animals.` );
            element.appendChild( text );

    }
}