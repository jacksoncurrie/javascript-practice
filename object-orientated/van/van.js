/*
 * Author      : Jackson Currie
 * Date        : 2018-06-14
 * Description : EZ Van Hire's infromation about their fleet
 */

// New Van

class Van
{
    // VanID properties

    get VanID()
    {
        return this.vanID;
    }

    set VanID(value)
    {
        this.vanID = value;
    }

    // Load capacity properties

    get Capacity()
    {
        return this.capacity;
    }

    set Capacity(value)
    {
        this.capacity = value;
    }

    // Licence properties

    get Licence()
    {
        return this.licence;
    }

    set Licence(value)
    {
        this.licence = value;
    }

    // Hire cost per day properties

    get CostPerDay()
    {
        return this.costPerDay;
    }

    set CostPerDay(value)
    {
        this.costPerDay = value;
    }

    // Insurance per day properties

    get Insurance()
    {
        return this.insurance;
    }

    set Insurance(value)
    {
        this.insurance = value;
    }

    // Constructor of new van

    constructor(_vanID, _capacity, _licence, _costPerDay, _insurance)
    {
        this.VanID = _vanID;
        this.Capacity = _capacity;
        this.Licence = _licence;
        this.CostPerDay = _costPerDay;
        this.Insurance = _insurance;
    }

    // Work out total cost

    TotalCost()
    {
        return +this.CostPerDay + +this.Insurance;
    }
}

// Main program

// Add new van

var van = new Van();

// Get inputs from the user

van.VanID = prompt("EZ Van Hire: Enter Van Details.\n\nVan ID            :  ");
van.Capacity = Number(prompt("EZ Van Hire: Enter Van Details.\n\nLoad Capacity (m3):  "));
van.Licence = prompt("EZ Van Hire: Enter Van Details.\n\nLicence Type      :  ");
van.CostPerDay = Number(prompt("EZ Van Hire: Enter Van Details.\n\nHire Cost Per Day : $")).toFixed(2);
van.Insurance = Number(prompt("EZ Van Hire: Enter Van Details.\n\nInsurance Per Day : $")).toFixed(2);

// Display information with total cost

console.log(`
EZ Van Hire: Van Details
------------------------
Van ID             : ${van.VanID}
Load Capacity (m3) : ${van.Capacity}
Licence Type       : ${van.Licence}
Hire Cost Per Day  : $${van.CostPerDay}
Insurance Per Day  : $${van.Insurance}
Total Hire Cost    : $${van.TotalCost().toFixed(2)}
`);

// End of program