function checkFruit( fruit ) {

    // Initalise variables

    let element = document.getElementById( 'result' );
    let text = document.createTextNode( `Tha is not an available fruit.` );
    let result = '';
    fruitCheck = fruit.toUpperCase();

    // Empty result element

    element.innerHTML = "";

    // Check Guess

    switch( fruitCheck ) {
    
        case "BANNANAS":

            text = document.createTextNode( `${fruit} costs: $1.20/kg` );
            element.appendChild( text );
            break;

        case "APPLES":

            text = document.createTextNode( `${fruit} costs: $3.10/kg` );
            element.appendChild( text );
            break;

        case "ORANGES":

            text = document.createTextNode( `${fruit} costs: $4.60/kg` );
            element.appendChild( text );
            break;

        case "KIWIFRUIT":

            text = document.createTextNode( `${fruit} costs: $2.70/kg` );
            element.appendChild( text );
            break;
        
        default:

            element.appendChild( text );

    }
}