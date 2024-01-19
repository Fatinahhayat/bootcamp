//function
function hello(){
    console.log("Welcome to JavaScript");
}
hello();

// Functions in JavaScript
/* A JavaScript function is defined with the function keyword,*/



// A simple example 
// let totalPrice = till(3, 15) //45
//for the purpose of the demo, the first number = quantity (x), second = price (y)
// console.log(totalPrice) //45
// let a = 6;
// let b = 8;
// let totalPrice2 = till(a,b); // a = 6, b = 6

// let test = till(9,10);

 //function till(quantity, price){
    //console.log(quantity); //3 //5
    // return quantity * price
    // price and quantity are fed into the function in the form of x and y
    //3 will replace quantity, 15 price
    //return statement stops function running, it will also provide a value if specified.
    //in example, return stops the function, and then gives the value of x * y

//}
// 3 * 15 = 45
// console.log(totalPrice); //3*15 45
// console.log(totalPrice2); //6*8 48

//Basic Example Test

let totalPrice3 = till(2, 10);
console.log(totalPrice3);

let c = 3;
let d = 20;
let totalPrice4 = till(c,d);

let test = till(2,10);

function till(quantity, price){
    return quantity * price
};

console.log(totalPrice3);
console.log(totalPrice4);

//Example 2

let money = 20; // global variable

function compound(){
    let compound = money + (money * 0.02);
    let year2 = compound * 1.02;
    let year3 = year2 * 1.02;
    console.log(compound);
    console.log(year2);
    console.log(year3);
    return [year3, year2, compound]
};
compound(); //20.4
let year3 = compound();
console.log(year3);

function netPay(quan, cost){
    let grossPay = till(quan, cost); //125
    //inside we have called the till function  --> take value to the till function
    // --> returns calculate number
    let calculateVat = grossPay * 0.8; //this will give us 80% of the gross pay
    //effectively taking 20% Vat
    console.log(calculateVat);
    return calculateVat; //this will stop the function running
};
netPay();

//Task 1 - my version 
function fullName(){
let firstName = "Fatinah";
let lastName = "Hayat";
console.log(firstName);
console.log(lastName);
console.log("Hello", firstName, lastName)
return ["Hello" ,  firstName , lastName]
};
fullName();

/*Write a function that takes in a first name and a surname as arguments 
and returns a message greeting them.*/ 

function greet(firstname, surname){
    return(`Welcome ${firstname} ${surname}`)
  }
  
  let welcome = greet(prompt('What is your firstname?'), prompt('What is your surname?'));
  console.log(welcome)

//Task 2 - my version

let names = [ "John", "Sam", "Peter"];
function alphabetOrder(names) {
    return names.sort();

}
console.log(alphabetOrder(names));

/* Write a function that takes in a string as an argument and sorts the 
string into alphabetical order and returns the result */

function alphaSort(input){
    return input.split("")
    .sort()
    .join("");
  }
  
  let userString = prompt("Type a word to sort aplhabetically");
  console.log(alphaSort(userString))


//Task 3

function cashMachine(){
    let withdrawlAmount = 200;
    let pinNumber = 1234;

}
/*Write a cash machine / atm function that takes in a withdrawal amount 
and a pin number as an argument and compares the pin and withdrawal amount 
against a stored pin and account balance. If the pin matches and the balance 
is sufficient approve the transaction, if not decline the transaction. */

function withdraw(amount, pin){
    storedPIN = 9090;
    balance = 1200;
    
    if (amount < balance && pin === storedPIN){
      console.log(`You have withdrawn ${amount} your balance is now ${"£"(amount-balance)}`)
    }
    else {
      console.log("Sorry either the PIN is incorret or the amount is not available")
    }
    
    }
    userPIN = Number(prompt("please enter your PIN Number"));
    userAmount = Number(prompt("Enter the amount to withdraw"));


// let object = {
//     string: "This is a string", 
//     number: 20, 
//     boolean: true
//     array: [0,1,2,3,4]
//     nestedObj:{
//         string: "This is a string",
//         number: 20,
//         boolean: true
//     }
// }

let person1 = {
    name: "John",
    age: 20,
    city: "London"
}
console.log(person1);

let films = {
    film1: {
        name: "Titanic",
        yearReleased: 1997,
        genre: "Romantic, Adventure",
        rating: "7.9/10"
    },
    film2: {
        name: "Independence Day",
        yearReleased: 1996,
        genre: "Action, Adventure, Sci-Fi",
        rating: "7/10"
    },
    film3: {
        name: "Dune",
        yearReleased: 2021,
        genre: "Sci-Fi, Adventure",
        rating: "8/10"
    }
}
console.log(films);    
