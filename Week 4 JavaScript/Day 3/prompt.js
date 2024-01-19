// The default data type for prompt is string. Therefore, no data conversion is required
let user = prompt("Enter your Username: ");
document.write(`Welcome ${user}</br>`);

//Use parseInt for numberic whole number with prompt to convert user input to integer data type

/* let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let total = num1 + num2;

document.write(`The answer to ${num1} + ${num2} = ${total}`); */

// Use parsefloat for decimal numbers with prompt to convert user input to decimal/float data type


let num3 = parseFloat(prompt("Enter the third number:"));
let num4 = parseFloat(prompt("Enter the fourth number:"));
let total2 = num3 + num4;

document.write(`The answer to ${num3} + ${num4} = ${total2}`);