
/*
To explore loops and integrate them into your code
For Loop
While Loop
ForEach Loop
Do While Loop
*/

//for loop is use to iterate over an object for a specific number of times 



// ++ is the increment operator , where we place the increment operator impacts when the increment takes place
let num1 = 10;
document.write(`The value of num1 before incrament ${num1}</br>`);
let num2 = 20;
//let num2 = ++num1;
//document.write(`The value of num1 after incrament ${num1}</br>`);

let num3 = ++num2;
document.write(`The value of num1 after incrament ${num3}</br>`);

// for Loop
// i = 0  AND I = 1, 2, 3, 4, 5, 6 AND SO ON.
for (let i = 0; i <21; i++) {
    document.write(`</br> ${i}`)
};

//declare empty Array
let multiplesOfTwo = [];
document.write(`</br> EMPTY ARRAY ${multiplesOfTwo}`);
for (let aNumber = 0; aNumber <25; aNumber++) {
    //document.write(`</br> ${i}`)
    if (aNumber % 2 === 0)
    {
        multiplesOfTwo.push(aNumber)
    }
};
document.write(`</br> populated array ${multiplesOfTwo}`);

let people = [ "Phillip", "James", "Erica", "Fatinah", "Johanna", "Sam" ];

for (let aPerson in people){
    document.write(`</br> ${people[aPerson]}`)
};

//aName = prompt("Enter a name to search");

for (let findName in people){
    //document.write(`</br> ${people[aPerson]}`)
    if(people[findName] === "Fatinah")
    {
        break;
    }
    document.write(`</br>The list is ends on ${people[findName]} name`);
};


// Task 1: Create an array of your favourite films / TV shows, up to 5 items.

let films = ["Trance", "Flight", "Guardians of the Galaxy", "Dune","Titanic"];
document.write(`</br>Here is a list of my favourite films ${films}`);


//Use an array method to add 2 more items to your array.
//film.push("Napoleon", "The Godfather");
//document.write(`</br> Updated list of films ${films}`);
films.push("Napolean", "The Godfather");
document.write(`</br>Update movies: ${films}`);
document.write(`</br>The number of movies is: ${films.length}`);


//Use a loop to cycle through the array and log each item to the console/ browser.

for (let fi = 0; fi < films.length; fi++){
    document.write(`</br>${films[fi]}</br>`);
}



// Task 2: Generate 10 random numbers between 1-100 and log them to the console/browser.

for (let randomInt = 0; randomInt < 10; randomInt++){
    let randMax = 100;
    let randMin = 1;
   
    let randNum = Math.floor(Math.random() * (randMax - randMin) + randMin);
    document.write(`</br>random Number is ${randNum}`);
 
}
 
document.write(`</br></br></br>`);


//While iterates/repeats until a condition is met


// Task 3: Create a loop that counts backwards from 20-0.

for (let bn = 20; bn >= 0; bn --) {
    document.write(`Number is ${bn}</br>`);
};

// ForEach method calls a function for each element in an array

//While loops iterates/repeasts until a condition is met
//example1:
let number = 0;

while(number < 5){
    document.write(`</br>Number is ${number}`)
    number++
};

let userData = "test"; //prompt("Enter user data:")
let systemData = "test";

while(userData === systemData){
    document.write(`</br>Successfully logged in`)
    systemData++
};

//example2:

let total = 0;

//to ask for user input

let userNum = parseInt(prompt("Enter a number"));

while (userNum >=0){
    //add only positive numbers
    total += userNum //total + = userNum

    // keep asking for user input if the number is positive
    userNum = parseInt(prompt("Enter a number:"))
};
document.write(`</br>the total is ${total}`);


// Do While run the loop first before checking for the condition

let number1 = 10;
let number2 = 15;
do{
    // body will run at least once even if the condition is false/not met
    document.write(`</br>This code will be executed at least once`);
    document.write(`</br>The value ${number1} is less than the value ${number2}`);
    number1++;

}while(number1 <= number2);

//using count
/*
let count = 10;

do{
    // body will run at least once even if the condition is false/not met
    document.write(`</br>This code will be executed at least once`);
    document.write(`</br>The value ${count} is less `);
    count++;

}while(count > 12;
*/

//infinte while loop example - YOU WON'T NEED TO USE THIS! - this will crash your computer!
/*
while(true){


}
*/
// ForEach Method calls a function for each element in an array

let peopleArray = [ "Phillip", "James", "Erica", "Fatinah", "Johanna", "Sam" ];
document.write(`</br>ForEach method calls a function for each element in the Array</br>`);
//using forEach syntax below 
//theArrayObject.forEach(element => { });

peopleArray.forEach(names);

function names(aPerson){
    // displays names of people in the array
    document.write(`</br>${aPerson}</br>`); 
};

let userArray = [ "Phillip", "James", "Erica", "Fatinah", "Johanna", "Sam"];
document.write(`</br>Update</br>`); 
userArray.forEach(userGreetings);

function userGreetings(aPerson, index, arrayObject){
    // displays names of people in the array
    arrayObject[index] = "Hello" + aPerson;
    
}
document.write(`</br>${userArray}</br>`); 

//Task 5:
//Review the for loop examples and convert them to while, doWhile and forEach loops 

// FOR Loop will repeat a the same code over and over again until a specified spot point so you don't have to write out the code individually over and over again. ie. for the below example instead of writing document.write("For Loop:0"</br>)
//document.write("For Loop:1"</br>)
//document.write("For Loop2:"</br>) and so on you can use the below code.
let n1 = 13;
let n2 = 30

for (let n = 0; n < 10; n++ ) {
    document.write(`</br>For Loop: ${n}`);
};

