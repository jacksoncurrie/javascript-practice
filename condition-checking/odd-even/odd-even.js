function checkNum( num ) {

    // Initalise variables

    let element = document.getElementById( 'result' );
    let text = document.createTextNode( 'Nothing entered.' );
    let result = '';

    // Empty result element

    element.innerHTML = "";

    // Check Number

    if( num == '' ) {

        element.appendChild( text )

    } else if( num % 2 == 0 ) {

        text = document.createTextNode( `${num} is even.` );
        element.appendChild( text );

    } else {

        text = document.createTextNode( `${num} is odd.` );
        element.appendChild( text );

    }
}