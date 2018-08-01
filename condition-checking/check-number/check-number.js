function checkNum( num1, num2 ) {

    // Initalise variables

    let element = document.getElementById( 'result' );
    let text = document.createTextNode( 'Nothing entered.' );
    let result = ''

    // Empty result element

    element.innerHTML = "";

    // Check which number is greatest

    if( num1 == '' || num2 == '' ) {

        element.appendChild(text);
        return;

    }
    if( num1 === num2 ) {

        result = 'The numbers are the same.'

    } else if( num1 > num2 ) {

        result = 'The first number is largest.'

    } else {

        result = 'The second number is largest.'

    }

    // Add the result to the page
    
    text = document.createTextNode( `First number: ${num1}, Second number: ${num2}. ${result}` )
    element.appendChild(text);

}



/*function guessNum( guess ) {
    let numberToGuess = Math.floor(Math.random()*10)+1;
    document.getElementById("result2").appendChild(document.createTextNode());
}*/