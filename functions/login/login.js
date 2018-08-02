/*
 *  Author:       Jackson Currie (30005345)
 *  Date:         2018-05-17
 *  Description:  Login for PTL
 */

// function for checking username

let checkUsername = (_username) => _username.length >= 8;

// function for checking password is eqal and greater than 8 characters

let checkPassword = (_password1, _password2) => 
    (_password1 == _password2) /* Paswords are equal */ &&
    (_password1.length >= 8) /* password1 is valid */ &&
    (_password2.length >= 8) /* password2 is valid */;

// Declare variables

let username = '';
let password1 = '';
let password2 = '';

// Welcome screen

console.log(`
--------------------------------
--- Welcome to the PTL Login ---
--------------------------------

`)

// Loop while username is not correct
do
{
    // Read Username

    username = prompt("Please enter your username (must be at least 8 characters long): ");

    // Check username input

    if(checkUsername(username))
    {
        // Correct Password

        console.log(`\n${username} is a valid username.\n`);

        // Loop while passwords do not match

        do
        {
            // Read both passwords

            password1 = prompt("\nPlease enter your password (must be at least 8 characters long): ");
            password2 = prompt("Please confirm password (passwords must match): ");

            // Check password inputs

            if(checkPassword(password1, password2))
            {
                // Acceptance message

                console.log(`\nWelcome ${username}.\nYour username and password has been set.\n`)
            }
            else
            {
                // Error message for password
                
                console.log(`\nSorry ${username}.\nPasswords are not valid.`)
            }
        }
        while(!checkPassword(password1, password2));
    }
    else
    {
        // Error message for username

        console.log(`\n${username} is not a valid username.\n`);
    }
}
while(!checkUsername(username));

// End of Program