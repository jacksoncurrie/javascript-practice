/** 
 * Getting Change
 *  - created on 2018-03-22
 * @version 1.0
 * @author Jackson B. Currie <30005345@student.toiohomai.ac.nz>
 * @summary Given cost and money paid, return cash change.
 */

 /**
  * @class
  * @name Transaction
  * @classdesc Creates transactions
  */
class Transaction
{
    /**
     * Sets the cash left and change to give back
     * @constructor
     * @param {number} price How much it costs
     * @param {number} chashGiven How much cash was given
     */
    constructor( price, cashGiven )
    {
        /**
         * List of notes for change
         * @type {number[]}
         */
        this.change = [];
        /**
         * Cash remaining for calculation
         * @type {number}
         */
        this.cashLeft = cashGiven - price;
    }
    /**
     * Adds new change
     * @method
     * @name change
     * @param {number} change New change to add 
     */
    addChange( change )
    {
        // Add note/coin to list
        this.change.push( change );
    }
    /**
     * Takes away money
     * @method
     * @name takeAway
     * @param {number} amount amount to take away
     */
    takeAway( amount )
    {
        // Take away note/coin from money owing
        this.cashLeft -= amount;
    }
    /**
     * Displays final change
     * @method
     * @name displayChange
     */
    displayChange()
    {
        // Create an output string
        let output = '';
        // Loop for all of the change list excluding the last value
        for( let i = 0; i < this.change.length-1; i++ )
        {
            // Add list item to output string
            output += `$${this.change[i]}, `;
        }
        // Add last value to output string with full stop ending
        output += `$${this.change[this.change.length-1]}.`;
        // Log the output result to the console
        console.log( `Change to give: ${output}` );
    }
    /**
     * Works out change to give
     * @method
     * @name workOutChange
     */
    workOutChange()
    {
        // Loop for all values of money in money list
        for( let i = 0; i < money.length; i++ )
        {
            // Check if a note/coin can be given, until it can't
            while( this.cashLeft - money[i] >= 0 )
            {
                // Take this note/coin away form money owing
                this.takeAway( money[i] );
                // Add this note/coin to the change list
                this.addChange( money[i] );
            }
        }
    }
}
/**
 * List of notes and coins to use
 * @constant
 * @type {number[]} 
 */
 const money = [ 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1 ];
/**
 * Frst transaction
 * @type {Transaction}
 */
let transaction1 = new Transaction( 42.30, 100 );
// Work out what hange is required
transaction1.workOutChange();
// Display the change to the screen
transaction1.displayChange();
// End of program