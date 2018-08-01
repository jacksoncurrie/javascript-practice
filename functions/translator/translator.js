/*
 * Author:       Jackson Currie
 * Date:         2018-04-06
 * Description:  Translate "Hello"
 */

// Set rounding function

function translate( language )
{
    // Set languages
    
    let languages = { MAORI : 'Kia ora', JAPANESE : 'Kon\'nichiwa', HINDI : 'Namaste', FRENCH : 'Bonjour', SAMOAN : 'Talofa' };

    return languages[ language ];
}

// Get language

let language = prompt( 'Enter your language (Maori, Japanese, Hindi, Fench, or Samoan):').toUpperCase();

// output result

console.log( translate( language ) );

// End of program