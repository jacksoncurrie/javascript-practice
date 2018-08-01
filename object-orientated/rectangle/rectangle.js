/** 
 * Making Rectangles
 *  - created on 2018-03-22
 * @version 1.0
 * @author Jackson B. Currie <30005345@student.toiohomai.ac.nz>
 * @summary Given height and width, display rectangle of given symbol
 */

/**
 * @class
 * @name Rectangle
 * @classdesc Creates rectangles
 */
class Rectangle 
{
    /**
     * Sets height and width of the rectangle, with what symbol to use.
     * @constructor
     * @param {number} height - How many symbols high
     * @param {number} width - How many symbols accross
     * @param {character} symbol - What symbol to use
     */
    constructor( height, width, symbol )
    {
        this.height = height;
        this.width = width;
        this.symbol = symbol;
    }

    /**
     * Displays rectangle to console.
     * @method
     * @name display
     */
    display()
    {
        /** @type {number} */
        let output = '';

        // Loop until height is reached
        for( let row = 1; row <= this.height; row++ )
        {
            // Loop until width is reached
            for( let col = 1; col <= this.width; col++ ) 
            {
                output += this.symbol;
            }
            // Log output for the line, and reset line 
            console.log( output );
            output = '';
        }
    }
}

/** @type {Rectangle} */
let rectangle1 = new Rectangle( 4, 3, '*' );
rectangle1.display();

console.log();

/** @type {Rectangle} */
let rectangle2 = new Rectangle( 18, 9, '#' );
rectangle2.display();