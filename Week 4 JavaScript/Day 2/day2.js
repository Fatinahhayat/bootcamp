//Part 2: Selecion programming Construct

/* Strings in Javascript

Strings functions

Type Conversion and Coercion

Scope: if, else conditionals & switch case operators
*/

//<br/> works in the browser and in the console window - if using single or double quote marks on the outside of the string to use them wihtin the body of the string you have to use the other to what you have used on the outside.
document.write("He said hello thats it </br>");
document.write("He said 'hello' thats it </br>");
document.write('He said "hello" thats it </br>');
/*document.write("He said \"hello"\ thats it </br>");*/

// \n and \u000a works in the console window and not in the browser -  these create a break?! -check this! in the console but not in the browser
let quote = " </br>He said \nhello thats it";
let quote2 = " </br>He said \u000ahello thats it";

document.write(quote2);
document.write(quote);

console.log(quote);
console.log(quote2);

//string functions
let breakfast = "Toast";
let lunch = "Chicken salad";
let dinner = "Mash"


document.write(`</br> The number of characters in the word ${breakfast} is ${breakfast.length}`); // this will give you the number of characters in the word that has been defined as breakfast ie. Toast has 5 characters


document.write(`</br> Upper case ${breakfast.toUpperCase()}`); //this will put the variable defined as breakfast to upper case ie. TOAST

document.write(`</br> Lower case ${breakfast.toLowerCase()}`); //this will put the variable defined as breakfast to lower case ie. toast
document.write(`</br> ${dinner}`);
document.write(`</br> Replaces a string with another string ${dinner.replace("Mash", "Fries")}`); //replaces an item for another item without changing the variable that has been defined


document.write(`</br> Sliced ${lunch}: ${lunch.slice(2, 7)} `); //slices the variable from the character you want it to start at and end at ie. this gives back 'icken'
document.write(`</br> Sliced ${lunch}: ${lunch.slice(2, -2)} `); // the negative value is slicing from the end of the variable characted ie -2 characters from salad is 'sal'


document.write(`</br> substring ${lunch.substring(4, 9)}`); //substring can pull out characters in the middle of the variable - SUBSTRING DOES NOT INCLUDE THE LAST NUMBER IE. 9 SO IT WILL ONLY SHOW UP TO CHARACTER VALUE 8


document.write(`</br> index of ${breakfast.indexOf("a")}`); // shows the index value of a character ie. a is the 2 character of Toast with T = 0 and o = 1 therefore a = 2
document.write(`</br> index of ${lunch.indexOf("c")}`);
document.write(`</br> last index of ${lunch.lastIndexOf()}`); // gives the last index of the value

let mealCost = 12.3456765
document.write(`</br> ${mealCost.toFixed(1)}`); // to fix method will give you value to a certain decimal point as shown in this example - just a string method
document.write(`</br> ${mealCost.toFixed(2)}`);
document.write(`</br> ${mealCost.toFixed(3)}`);

let toFixedMealCost = mealCost.toFixed(6);

document.write(`</br> ${toFixedMealCost}`);
document.write(`</br>  ${typeof toFixedMealCost}`);


// Type coercion: Automatically dobne by the JS interpreter

let num1 = 10;
let name = "Paul";

let num2 = 11;
let num3 = 12;


 // converting a number data type into a string datatype and pass it to a variable call num2String
document.write("<br/>This Data Type is converted from a number to a : ", typeof String(num2)," <br/>" );

let numberToString = String(num3);
document.write(`</br> ${numberToString}: ${typeof numberToString}</br>`)

let num4 = "500"
let stringnum = Number(num4);
document.write(`</br> ${stringnum}: ${typeof stringnum}</br>`);

stringnum = parseInt(num4);
document.write(`</br> ${stringnum}: ${typeof stringnum}</br>`);


let num5 = 500.566
let floatNum = parseFloat(num5);
document.write(`</br> ${floatNum}: ${typeof floatNum}</br>`);


let num6 = 1
let boolNum = Boolean(num6);
document.write(`</br> ${boolNum}: ${typeof boolNum}</br>`);

let num7 = 0
let boolNum1 = Boolean(num7);
document.write(`</br> ${boolNum1}: ${typeof boolNum1}</br>`);




//document.write(`</br> ${typeOf }</br>`);

// document.write("<br/>", ," <br/>")



 document.write("<br/> If, Else if and Else <br/>")
document.write("<br/> <br/>")
 
// JavaScript Selection
/*

*******************************************
/*if (condition){
   do something
}
else{
   do something else, because the condion above is not met
} 
YOU CAN HAVE ANY MANY ELSE CHECKS AS YOU WANT BY USING ELSE IF FOR MORE THAN ONE. IF ITS JUST ONE OTHER OUTCOME USE ELSE ONLY! */

let userNum = 45;
let compNum = 22;
// using equal to compare ==
if (userNum == compNum){
    //do something/executer code below
    console.log("The value are the same.")
    document.write(`</br> The value ${userNum} are the same as ${compNum}.`)
}
else {
    console.log("The values are not the same.")
    document.write(`</br> The value ${userNum} are not the same as ${compNum}!!!!!!`)
}

document.write("</br>Tanery Operator Example below</br>")
// tanery operator example - not suitable for every single use case but can be used like below.
let numberCheck = (userNum == compNum) ? "</br>The values are the same</br>":"</br>The values are not the same!!</br>"

console.log(numberCheck)
document.write(numberCheck)


/* if (condition){
   do something
}
else if (another condition){
   do another thing
}
else{
   do something else, because none of the condion above are met
}


*/








let trafficLight = "Yellow"
//let ready = "Yellow"
//let go = "Green"

if(trafficLight === "Green"){
    console.log("Safe the drive across the road.")
    document.write(`</br> Safe to drive across the road on.`)
} else if (trafficLight === "Red") {
    console.log("Not safe the drive across the road.")
    document.write(`</br> Not safe to drive across the road on.`)
     
} else if (trafficLight === "Yellow") {
    console.log("Ready to drive across the road.")
    document.write(`</br> Ready to drive across the road on.`)
} else{
    console.log("Faulty traffic light, warning.")
    document.write(`</br> Faulty traffic light, warning.`)
}

//if you want to give a user multiple tries ie 3 attempts to login use WHILE LOOPS which we will go over further down the line.
let systemPass = "Password"
let userPass = "password"

if (systemPass === userPass) {
    console.log("</br>Welcome user, you have successfully logged in</br>")
    document.write("</br>Welcome user, you have successfully logged in</br>")
} else {
    console.log("</br>incorrect password</br>")
    document.write("</br>incorrect password</br>")
}

// numbers if, else 

let userNum1 = 45;
let compNum1 = 22;

if (userNum1 > compNum1) {
    console.log(`</br> ${userNum1} is greater than ${compNum1}</br>`)
    document.write(`</br> ${userNum1} is greater than ${compNum1}</br>`)
} else if (userNum1 == compNum1) {
    console.log(`</br> ${userNum1} is same as ${compNum1}</br>`)
    document.write(`</br> ${userNum1} is same as ${compNum1}</br>`)
}
else if (compNum1 > userNum1) {
    console.log(`</br> ${compNum1} is greater than ${userNum1}</br>`)
    document.write(`</br> ${compNum1} is greater than ${userNum1}</br>`)

}
else {
    console.log("</br>invalid input</br>")
    document.write("</br>invalid input</br>")
}
if (userNum1 > 20 && compNum1 <=50) {
    console.log(`</br> Valid</br>`)
    document.write(`</br>Valid</br>`)
}
else {
    console.log(`</br>invalid</br>`)
    document.write(`</br>invalid</br>`)
}

// Names if, else if, else
// === - Equal Value and Equal Data Type
// uses variable from line 162 for this traffic light example
if (trafficLight === "Green" || trafficLight === "Yellow") {
    console.log(`</br>GO</br>`)
    document.write(`</br>GO</br>`)
} else {
    console.log(`</br>STOP</br>`)
    document.write(`</br>STOP</br>`)
}


//document.write("</br></br>")


//document.write("</br></br>")


//document.write("</br></br>")



// Switch case - let's you check for one condition, if thats not the case you go to the next condition and so forth until all the conditions have been checked.

// let varAday = "AdayOfTheWeek";

/* switch(varAday) {
    case "day1":
        document.write("some text to displa")
        break;
    case "day2":
        document.write("some text to displa")
        break;
    case "day3":
        document.write("some text to displa")
        break;
    case "day4":
        document.write("some text to displa")
        break;
    case "day5":
         document.write("some text to displa")
        break;
    default:
        document.write("some text to displa")
} */

let day = "Sunday";

switch(day) {
    case "Monday":
        document.write("</br>Today is Monday.</br>")
        break; // exit if case matches
    case "Tuesday":
        document.write("</br>Today is Tuesday.</br>")
        break;  // exit if case matches
    case "Wednesday":
        document.write(`</br>Today is Wednesday.</br>`)
        break;  // exit if case matches
    case "Thursday":
        document.write("</br>Today is Thursday.</br>")
        break;  // exit if case matches
    case "Friday":
        document.write("</br>Today is Friday.</br>")
        break;  // exit if case matches
    default:
        document.write("</br>Weekend</br>")
}