/*
 *  Author:       Jackson Currie (30005345)
 *  Date:         2018-05-17
 *  Description:  Adding two matrices.
 */

// Declare matrices

let matrix1 = new Array();
let matrix2 = new Array();
let resultMatrix = new Array();

// Declare outputs

message1 = '';
message2 = '';
messageResult = '';

// Add headings to outputs

message1 += `
----------------
--- Matrix 1 ---
----------------`;

message2 += `
----------------
--- Matrix 2 ---
----------------`;

messageResult += `
---------------------
--- Result Matrix ---
---------------------`;

// Loop for row

for(let row = 0; row <= 2; row++)
{
    // Add dimension to matrices

    matrix1[row] = [];
    matrix2[row] = [];
    resultMatrix[row] = [];

    // Add new line to output new row

    message1 += '\n';
    message2 += '\n';
    messageResult += '\n';

    // Loop for columns

    for(let column = 0; column <= 2; column++)
    {
        // Set value to random number between -10 and +10

        matrix1[row][column] = Math.floor((Math.random() * 21) - 10);
        message1 += matrix1[row][column] + ', ';

        matrix2[row][column] = Math.floor((Math.random() * 21) - 10);
        message2 += matrix2[row][column] + ', ';

        // Set sum of matrix1 and matrix2 into resultsMatrix

        resultMatrix[row][column] = matrix1[row][column] + matrix2[row][column];
        messageResult += resultMatrix[row][column] + ', ';
    }
}

// Add end of matix

message1 += '\n----------------\n';
message2 += '\n----------------\n';
messageResult += '\n---------------------\n';

// Display results to output

console.log(message1 + message2 + messageResult);

// End of program