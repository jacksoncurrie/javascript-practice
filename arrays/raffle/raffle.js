/*
 * Author:       Jackson Currie <30005345@student.toiohmai.ac.nz>
 * Date:         2018-04-05
 * Description:  Gets a raffle winner
 */

// Initalize constansts

const NUMBER_OF_TICKETS = 20;

// Initalize variables

let tickets = [ 20 ];
let winner = 0;

// Set tickets

let tickets = [ 'Jack', 'Matt', 'Sam', 'Adam', 'John', 'Hannah', 'Willie', 'Richard', 'Samantha', 'Olivia', 'Georgia', 'Wendy', 'Jacob', 'Jason', 'Jackson', 'Mark', 'Luke', 'Joseph', 'Lucy', 'Brad' ];

// Loop for raffle sales

for( var x in tickets )
{
    console.log( `Ticket ${ +x + 1 }: ${ tickets[ x ] }` );
}

// Pick winning number

winner = Math.floor( ( Math.random() * 19 ) + 0 );
console.log( `\nWinning ticket number is: ${ +winner + 1 }` );

// Ouput winner

console.log(`
***********************************************
Winner if the $1,000,000 jackpot is ${ tickets[ winner ] }
***********************************************
`);

// End of program