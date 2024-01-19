// Objectives
// Introduction to JavaScript: Part1A Sequence ProgrammingConstruct
// ---•WritingIn-browser JavaScript
// ---•WritingDeveloper Console (Logs, Errors, debug.)
// ---•Variablesand data types Part
// ---•Properties and Methods
// ---•In-builtJavaScript Library that has mathematical properties and methods

// - sequence is the order in which the code is executed



// A Variable is a container that hold value (of any datatype)

// any variable(var/let/const) declared outside of a code has a  global scope
// Var  = old syntax  - Don't use
var oldschool = "old method of declaring a variable"

var num1  = 10;
console.log(oldschool);
console.log(num1);
myName = "Fatinah";
console.log(myName);
myAge = "38";
console.log(myAge);
myLocation = "London";
console.log(myLocation);


let changeable = "A value stored in a variable that can be redeclared";
console.log(changeable);

// redeclare changeable by

changeable = "A new value has been passed/redeclared witht he changeable variable";
console.log(changeable);

// Create a variable using var and redeclare/change initial value

var address = "1 London Road";
console.log(address);
address = "2 London Road";
console.log(address);



// redeclare the variable firstPerson

// const for variables with values that will not change ie:
const myConstant = "A value that can not be redeclared"
const daysInWeek = 7;
console.log(daysInWeek);

// Limitations
// let someVar "something"
// let someVar = "something else" - you cannot do this! you cannot try to declare the same variable twice

// variables declared without a value results in undefined
let someVar;
console.log(someVar);

// we cannot overwrite the value of a const variable is such as below/
// const daysInWeek = 5;
// console.log(daysInWeek);


// let method for declaring variables that we may want redeclare/reassign the value





 // declare secondPerson variable for the first time

// let secondPerson = "Paul";  // We can't redecarle a let variable

// redecare/reassign the value associated with secondPerson variable 

// Declared user variable but with no value, which results to undefined


// console.log



// In browser javaScript
// document.write 



// use const to declare variables with value(s) that will never change


// We cannot overwite the values of a constant variable

// daysInWeek = 5;

// document.write("<br/> Modified value:", daysInWeek);

document.write("working with the document.write method in JS JavaScript Datatypes in the browser</br> ");
// JavaScript Datatypes - javascript has 14 types which are split into primitive data types which hold simple and single data (number, float,long,boolean,undefined, null, symbol, string). The other type complex data (object, ) which means it can hold multiple data values.
/*
number: 32 bit number (from -2, 000, 000, 000 to +2, 000, 000, 000)
float: 32 bit floating point number (ie decimal points)
long: 64 bit number (-9, 000, 000, 000, 000, 000 to +9, 000, 000, 000, 000 )
Boolean: 1 bit 0 or 1
undefined: 
null
symbol
string
*/
// Non- Primitive (Complex) Data types (holding complex data)
/*
Object: works with key value pairs therefore to declare an object we have to say */
/*objectName = {key:value, key:value, key:value};
const userDetails = {firstName:"John", lastName:"Smith", Age:"22"};
document.write(`</br>${userDetails.firstName}`);
document.write(`</br>${userDetails.lastName}`);
document.write(`</br>${userDetails.Age}`);
console.log( `${userDetails.firstName}` );
console.log( `${userDetails.lastName}` );
//Array: 
const people = ["Jane", "Anna", "Lucy", "Paul", "John"];
document.write(`</br> ${people}`);
console.log(`${people}`);


//Date:
const curDate1 = new Date("2023-12-11");
document.write(`</br> ${curDate1}`);
console.log(`${curDate1}`); */

//Primitive Data Types:
// numbers/integer
let num2 = 10;

// float/decimal
let myFloat = 11.2;

// long
let myLongNum = 919293344949;

// Boolean
    // True or False
    let bool1 = true;
    let bool2 = false;
    
document.write("</br> Number/Integer", num2);
document.write("</br> Float/decimal", myFloat);
document.write("</br> Long", myLongNum);
document.write("</br> Boolean Value 1", bool1);
document.write("</br> Boolean Value 2", bool2);

// undefined
document.write(" </br> undefined", undefined);

let fName = "James";
let lName = "Bond";

//concatenate(to join): use the plus operator

let fullName = fName + " " + lName;
document.write("</br> Your full name is ", fullName);

let breakfast = "Toast";
let lunch = "Chicken salad";
let dinner = "Mash"
let mealCost = 12

// use template literals to format output '${}
document.write(`</br>Today, ${fullName} had ${breakfast} for breakfast and will have ${lunch} for lunch and ${dinner} for dinner which cost him £${mealCost}.`) 


let $ = "I am a dollar";
document.write(`</br>${$}`);

document.write(typeof num2 ,"</br>");
document.write(typeof myFloat ,"</br>");
document.write(typeof myLongNum,"</br>");
document.write(typeof bool1,"</br>");
document.write(typeof fullName ,"</br>");
document.write(typeof daysInWeek,"</br>");

let cashAtBank = 12000
document.write(`</br> $${cashAtBank}`);
document.write(`</br> £${cashAtBank}`);

// use the plus operator to concatenate(to join)



console.log()


// JavaScript Using Template Literals


// check the data type of the variable
// document.write("<br/> check the data type of the variable <br/> " )
// document.write(typeof cashAtBank,"<br/>" )

//------------------------------------------------------------- Day 2:

// In-built JavaScript library  
// document.write("<br/>  <br/>")
// document.write("<br/> Math <br/>")


// Use the dot notation on methods, libraries and functions
 // Returns a pseudorandom number between 0 and 1.

// Generate random number between 1 and 10 (number between 0 and 1  x 10)



// Generate random number between 1 and 10 (number between 0 and 1  x 10) and round it down using the floor method - round down


// document.write("<br/>Rounded down using floor method : ",Math.floor(Math.random() * 10)) 


// Generate random number between 1 and 10 (number between 0 and 1  x 10) and rounds it using the round method
// document.write("<br/>Rounded using round method : ",Math.round(Math.random() * 10))


// Generate random number between 1 and 10 (number between 0 and 1  x 10) and round up using the ceil method
// document.write("<br/>Rounded using round method : ",Math.ceil(Math.random() * 10)) - round up 


// Object
const userDetails = {firstName:"John", lastName:"Smith", Age:"22"};
document.write(`</br> ${userDetails.firstName}`);
document.write(`</br> ${userDetails.lastName}`);
document.write(`</br> ${userDetails.Age}`);
console.log( `${userDetails.firstName}` );
console.log( `${userDetails.lastName}` );


// Array
const people = ["Jane", "Anna", "Lucy", "Paul", "John"];
document.write(`</br> ${people}`);
console.log(`${people}`);

// Date
const curDate1 = new Date("2023-12-11");
document.write(`</br> ${curDate1}`);
console.log(`${curDate1}`);

// In-built JavaScript library  
document.write("<br/>  <br/>");
document.write("<br/> Math <br/>");

// Use the dot notation on methods, libraries and functions
 // Returns a pseudorandom number between 0 and 1.
 document.write(Math.random());
 document.write("<br/>  <br/>");

 document.write(Math.random() * 10);
 document.write("<br/>  <br/>");

 let roundNum = Math.random();
 document.write(`</br> Random Value : ${roundNum}`);
 
 document.write("<br/>Rounded down using floor method : ",Math.floor(Math.random())); 

 document.write("<br/>Rounded using round method : ",Math.ceil(Math.random())); 