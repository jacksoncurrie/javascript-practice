var game;
var guess;
var animal;
var number;
var output;

do {

    game = Number( prompt( 'Guess Animal (1), or Guess Number (2) [Enter 0 to close]:' ) );

    if( game == 1 ) {

        animal = 'Cat';

        do {

            guess = prompt( 'Guess my favourite animal (Rabbit, Cat, Dog, or Bird) [Enter "end" to close]:' );

            switch( guess ) {

                case 'Rabbit':
                    
                    output = `${guess} is not correct, try again.`;
                    break;
                
                case 'Dog':

                    output = `${guess} is not correct, try again.`;
                    break;

                case 'Cat':

                    output = `${guess} is Correct`;
                    break;

                case 'Bird':

                    output = `${guess} is not correct, try again.`;
                    break;

                case 'end':

                    output = 'Goodbye.';
                    break;

                default:

                    output = `${guess} is not a specified animal, try again.`;

            }

            console.log( output );

        } while( guess != 'Cat' && guess != 'end' );

    } else if( game == 2 ) {

        number = Math.floor( Math.random() * 10 ) + 1;

        do {
            
            guess = Number( prompt( 'Guess my number (between 1 and 10) [Enter 0 to close]:' ) );

            if( guess == number ) {

                output = `${guess} is correct`;

            } else if( guess == 0 ) {

                output = 'Goodbye.';

            } else if( guess < number ) {

                output = `${guess} is too low.`;

            } else if( guess > number ) {

                output = `${guess} is too high.`;


            } else {

                output = `Not a number.`;

            }

            console.log( output );

        } while( guess != number && guess != 0 );

    } else if( game == 0) {

        console.log( 'Goodbye.' );

    } else {

        console.log( 'That is not a game' );

    }

} while( game != 1 && game != 2  && game != 0);