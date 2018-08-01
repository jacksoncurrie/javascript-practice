function checkWord( input ) {

    // Initalise variables

    let element = document.getElementById( 'result' );
    let text = document.createTextNode( 'Nothing entered.' );
    let result = '';

    // Reverse input

    input = input.toUpperCase();
    splitString = input.split('');
    reversedSplit = splitString.reverse();
    reversedInput = reversedSplit.join('');

    // Empty result element

    element.innerHTML = "";

    // Check Guess

    if( input == '' ) {

        element.appendChild( text );

    } else if( input == reversedInput ) {

        text = document.createTextNode( `The word ${input} is a Palindrome.` );
        element.appendChild( text );

    } else {

        text = document.createTextNode( `The word ${input} is not a Palindrome.` );
        element.appendChild( text );

    }
}