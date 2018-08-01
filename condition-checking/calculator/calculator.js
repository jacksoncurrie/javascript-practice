function add( num1, num2 ) {

    // Initalise variables
    let element = document.getElementById( 'result' );
    let result = +num1 + +num2;
    let text = document.createTextNode( `${num1} + ${num2} = ${+result}` );

    // Empty result element
    element.innerHTML = "";

    // Check value entered
    if( num1 == '' || num2 == '' ) {
        let text = document.createTextNode( 'A number is not entered.' );
        element.appendChild( text );
        return;
    }

    // Add result to screen
    element.appendChild( text );

}

function sub( num1, num2 ) {

    // Initalise variables
    let element = document.getElementById( 'result' );
    let result = num1 - num2;
    let text = document.createTextNode( `${num1} - ${num2} = ${result}` );

    // Empty result element
    element.innerHTML = "";

    // Check value entered
    if( num1 == '' || num2 == '' ) {
        let text = document.createTextNode( 'A number is not entered.' );
        element.appendChild( text );
        return;
    }

    // Add result to screen
    element.appendChild( text );

}

function mult( num1, num2 ) {

    // Initalise variables
    let element = document.getElementById( 'result' );
    let result = num1 * num2;
    let text = document.createTextNode( `${num1} * ${num2} = ${result}` );

    // Empty result element
    element.innerHTML = "";

    // Check value entered
    if( num1 == '' || num2 == '' ) {
        let text = document.createTextNode( 'A number is not entered.' );
        element.appendChild( text );
        return;
    }

    // Add result to screen
    element.appendChild( text );
    
}

function div( num1, num2 ) {
    
    // Initalise variables
    let element = document.getElementById( 'result' );
    let result = num1 / num2;
    let text = document.createTextNode( `${num1} / ${num2} = ${result}` );

    // Empty result element
    element.innerHTML = "";

    // Check value entered
    if( num1 == '' || num2 == '' ) {
        let text = document.createTextNode( 'A number is not entered.' );
        element.appendChild( text );
        return;
    }

    // Add result to screen
    element.appendChild( text );

}