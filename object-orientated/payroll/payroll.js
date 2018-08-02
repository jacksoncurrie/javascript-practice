/*
 *  Author:       Jackson Currie (30005345)
 *  Date:         2018-05-17
 *  Description:  Payroll for PTL
 */

// Employee

class Employee
{
    // Creating a new employee

    constructor(firstName, lastName, annualGrossSalary, taxRate)
    {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.AnnualGrossSalary = annualGrossSalary;
        this.TaxRate = taxRate;
    }

    // Accessing firstName

    get FirstName()
    {
        return this._firstName;
    }

    set FirstName(value)
    {
        this._firstName = value;
    }

    // Accessing lastName

    get LastName()
    {
        return this._lastName;
    }

    set LastName(value)
    {
        this._lastName = value;
    }

    // Accessing annualGrossSalary

    get AnnualGrossSalary()
    {
        return this._annualGrossSalary;
    }

    set AnnualGrossSalary(value)
    {
        this._annualGrossSalary = value;
    }

    // Accessing taxRate

    get TaxRate()
    {
        return this.taxRate;
    }

    set TaxRate(value)
    {
        this.taxRate = value;
    }

    // Works out and returns the net salary

    NetSalary()
    {
        return this.AnnualGrossSalary * (1 - (this.TaxRate / 100));
    }

}

// Creates an employee

let employee = new Employee();

// Welcome screen

console.log(`
--------------------------------
--- Welcome to PLT's Payroll ---
--------------------------------

`);

// Get employee's name

employee.FirstName = prompt("Please enter employee's first name: ");
employee.LastName = prompt("Please enter employee's last name: ");

// Get employee's annualGrossSalary

employee.AnnualGrossSalary = prompt("Please enter employee's annual gross salary: ");

// Get employee's taxRate

employee.TaxRate = prompt("Please enter employee's tax rate (%): ");

// Display employee's details and work out their net salary

console.log(`
Employee's Details
------------------

Name:                 ${employee.FirstName} ${employee.LastName}
Annual gross income:  $${employee.AnnualGrossSalary}
Tax Rate:             ${employee.TaxRate}%
Net Salary:           $${employee.NetSalary()}
`);

// End of program