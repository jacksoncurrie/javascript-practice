/*
 *  Author      :  Jackson Currie (30005345)
 *  Date        :  2018-06-07
 *  Description :  Smart T.V. product imports
 */

// Smart T.V. information
class SmartTV
{

    // Construct a new T.V.
    constructor(_make, _model, _size, _price)
    {
        this.make = _make;
        this.model = _model;
        this.size = _size;
        this.price = _price;
    }

    // T.V. make properties
    get Make()
    {
        return this.make;
    }

    set Make(value)
    {
        this.make = value;
    }

    // T.V. model properties
    get Model()
    {
        return this.model;
    }

    set Model(value)
    {
        this.model = value;
    }

    // T.V. screen size properties
    get Size()
    {
        return this.size;
    }

    set Size(value)
    {
        this.size = value;
    }

    // T.V. price properties
    get Price()
    {
        return this.price;
    }

    set Price(value)
    {
        this.price = value;
    }

    // Gets credit card price
    CreditPrice( _levy )
    {
        return (1 + (_levy / 100)) * this.Price;
    }
}

// Define variables
levy = 0;

// Output welcome screen
console.log(`
-------------------------
--- Smart Buy TVs Ltd ---
-------------------------
`);

// New T.V.
let tv = new SmartTV();

// Get T.V. make
tv.Make = prompt("Please enter the make of the T.V.:");

// Get T.V. model
tv.Model = prompt("Please enter model of the T.V.:");

// Get T.V. screen size
tv.Size = Number(prompt("Please enter the screen size of the T.V. (inches\):"));

// Get T.V. price
tv.Price = Number(prompt("Please enter the price of the T.V. ($):")).toFixed(2);

// Output the T.V.
console.log(`
-----------------------------
---------- New T.V ----------
-----------------------------

Make        :  ${tv.Make}
Model       :  ${tv.Model}
Screen Size :  ${tv.Size} inches
Price       :  $${tv.Price}

-----------------------------
`);

// Get credit card levy

levy = prompt("Please enter the credit card levy (%):");

// Display total price
console.log(`
Total Credit Card Price :  $${tv.CreditPrice(levy).toFixed(2)}

--------------------------------------
`);

// End of program


