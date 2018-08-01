/** 
 * FizzBuzz
 *  - created on 2018-03-23
 * @version 1.0
 * @author Jackson B. Currie <30005345@student.toiohomai.ac.nz>
 * @summary Given cost and money paid, return cash change.
 */
/**
 * @class
 * @name FizzBuzz
 * @classdesc Outputs FizzBuss results
 */
 class FizzBuzz
 {
     /**
      * @method
      * @name checkMult
      * @param {?number} num Number to be checked
      * @return Number or FizzBuzz result
      */
     checkMult( num )
     {
        /**
         * @type {number}
         */
        let result = '';
        // Checks for multiple of 3
        if( num % 3 == 0 )
        {
            result += 'Fizz';
            // Check multiple of 5 as well
            if( num % 5 == 0 )
            {
                result += 'Buzz';
            }
        }
        // If not check for multiple of 5
        else if( num % 5 == 0 )
        {
            result += 'Buzz';
        }
        // If neither
        else 
        {
            // Make results the number
            result += num;
        }
        // Send back final result
        return result;
    }
    /**
     * Loops for a range of numbers
     * @param {number} start Starting number
     * @param {number} finish End number
     */
    loopNum( start, finish )
    {
        // Loop from start to finish
        for( let i = start; i <= finish; i++ )
        {
            // Check number and log results
            console.log( this.checkMult( i ) );
        }
    }
}
/**
 * @constant
 * @type {number}
 */
const START = 1;
/**
 * @constant
 * @type {number}
 */
const END = 100;
/**
 * @type {FizzBuzz}
 */
let result = new FizzBuzz;
// Run loop
result.loopNum( START, END );
// End of program