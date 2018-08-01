/*
 * Title: GST Calculator
 * Author: Jackson Currie
 * Date: 12/03/2018
 * Purpose: Given a dollar value (input from user), calculate and display the GST amount and the total GST inclusive amount
*/

//Declare and initialise variables and constants
const GST_RATE = 0.15
let dollar = 0.00       
let gst = 0
let total = 0

//prompt for and get the dollar amount from the user (string input needs a type conversion to a number)
dollar = Number(prompt("Enter the dollar amount"))

//GST Calculations 
gst = dollar * GST_RATE
total = dollar + gst

//Display/log given data and calculated information (formatted to 2 dp)
document.writeln(`Dollar value: ${dollar.toFixed(2)}<br>`)
document.writeln(`GST amount:   ${gst.toFixed(2)}<br>`)
document.writeln(`Total:        ${total.toFixed(2)}<br>`)