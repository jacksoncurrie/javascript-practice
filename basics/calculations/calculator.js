/*
 * Title: Simple Calculator
 * Author: Jackson Currie
 * Date: 12/03/2018
 * Purpose: Perform +, -, *, / and % (modulus) operations on two initialised variables and display the result of the calculation.
 */

// Declare and initialise variables

let number1 = 10;
let number2 = 5;
let result = 0;

// Perform addition and display result of addition

result = number1 + number2
document.writeln( "<p>" + number1 + " + " + number2 + " = " + result + "</p>" )

//Perform subtraction and display result of subtraction

result = number1 - number2
document.writeln( "<p>" + number1 + " - " + number2 + " = " + result + "</p>" )

//Perform multiplication and display result of multiplication

result = number1 * number2
document.writeln( "<p>" + number1 + " * " + number2 + " = " + result + "</p>" )

//Perform division and display result of division

result = number1 / number2
document.writeln( "<p>" + number1 + " / " + number2 + " = " + result + "</p>" )

//Perform modulus (find remainder) and display remainder

result = number1 % number2
document.writeln( "<p>" + number1 + " % " + number2 + " = " + result + "</p>" )