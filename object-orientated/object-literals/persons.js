/* 
 * Author:       Jackson Currie - 30005345@student.toiohomai.ac.nz
 * Date:         2018-04-30
 * Description:  Creating objects
 */

// Creating objects

let person1 = { firstname : "Hemi", lastname: "Turei", age : 19, study : "Part Time" };
let person2 = { firstname : "Saanvi", lastname: "Petel", age : 22, study : "Full Time" };

// List property values of person1

console.log( "Property values of person1" );

for( let i in person1 )
{
    console.log( person1[i] );
}

// List property values of person2

console.log( "\nProperty values of person2" );

for( let j in person2 )
{
    console.log( person2[j] );
}

// Get full names

let fullname1 = person1.firstname + ' ' + person1.lastname;
let fullname2 = person2.firstname + ' ' + person2.lastname;

console.log( "\nperson1 fullname: " + fullname1 );
console.log( "person2 fullname: " + fullname2 );

// Change age

person1.age = 21;
person2.age = 24;

console.log();
console.log( person1 );
console.log();
console.log( person2 );

// Add nationality

person1.nationality = "New Zealander";
person2.nationality = "Indian";

console.log();
console.log( person1 );
console.log();
console.log( person2 );

// Delete study

delete person1.study;
delete person2.study;

console.log();
console.log( person1 );
console.log();
console.log( person2 );

// End of program