function checkPin( pin1, pin2 ) {

    // Initalise variables

    let element = document.getElementById( 'result' );
    let text = document.createTextNode( 'Incorrect input.' );
    let result = '';

    // Empty result element

    element.innerHTML = "";

    // Check Guess

    if( pin1 < 1000 || pin1 > 9999 || pin1 == '' ) {

        element.appendChild( text )

    } else if( pin1 == pin2 ){

        text = document.createTextNode( `PINs match. PIN set as ${pin1}` );
        element.appendChild( text );
        
    } else {

        text = document.createTextNode( `PINs do not match. PIN not set` );
        element.appendChild( text );
        
    }
}