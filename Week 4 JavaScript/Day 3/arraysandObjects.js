/*
Arrays and objects
Arrays:
- Learning Objectives: 
-- To understand what an array is
-- To explore how arrays can be used.
-- To make use of array methods.

Objects:
- Learning Objectives: 
-- Explore the concept of an Object
-- To access data from within an object

*/



// is an array - (HOLDS MULTIPLE VALUES IN ONE VARIABLE)
// In JS we start counting from zero(array is zero-index). Start counting from zero

let people =["Phillip", "James", "Erica", "Fatinah", "Jason", "Johanna", "Sam"];
document.write(`People: ${people}`);

// Access items in an array using the index value

document.write(`</br>Person: ${people[1]}`);
document.write(`</br>Person: ${people[3]}`);
document.write(`</br>Person: ${people[0]}`);
// below are out of scope so will come back with undefined 
document.write(`</br>Person: ${people[-1]}`);
document.write(`</br>Person: ${people[8]}`);



// Array property : length
// check the total number of items in an array using the dot notation followed by the length

document.write(`</br>The number of people is: ${people.length}`);


// Array Methods
// Add an item to an array using the push method

people.push("Luqman", "Mihir", "Abdul");
document.write(`People: ${people}`);
document.write(`</br>The number of people is: ${people.length}`);

// remove the last item in an array using the pop method

people.pop();
document.write(`People: ${people}`);
document.write(`</br>The number of people is: ${people.length}`);

// update an item in an array using their index value

people.push("someone");
document.write(`People: ${people}`);
people[9]="Abdul";
document.write(`</br>People: ${people}`);

// investigate 
//people.splice(4);
//document.write(`</br>People: ${people}`);
//people.shift(2);
//document.write(`</br>People are: ${people}`);
//people.unshift(people[2]);
//document.write(`</br>People are: ${people}`);
//people.concat(people[1]);
//document.write(`</br>Concating People: ${people}`);
//people.copyWithin()
//people.entries()
//people.every()

// You can create an empty array to add items later

let emptyArray = [];

emptyArray.push("A");
document.write(`</br>Adding items in later: ${emptyArray}`);

/*
Objects 
Explore the concept of an Object
To access data from within an object

*/
// let people = ["Yousef","Alfredo", "Kayi", "Zineb", "Nirupama", "Melvin", "Eduard", "Vairalakshmi", "Yusuf"]

// Syntax: peopleObject {"object":Value}
// An object is a group of values; unlike arrays, we can do something better than them:
// Rather than making an array["John Doe", "Billy"] and calling myArray[0], we can just call john.fullname and
// billy.fullname.

// Syntax for objects: peopleObject {"object":Value}
let peopleObject = {
    p1: "Zainab",
    p2: "Akansha",
    p3: "Nirmala",
    p4: "Mihir",
    p5: "Fisayo",
    p6: "Marian",
    p7: "Mihir",
}

// You can access object properties in two ways:
// objectName.propertyName or objectName["propertyName"]
document.write(`</br>`);
// objectName.propertyName 
document.write(`</br>People Object: ${peopleObject.p1}`);
// objectName["propertyName"]
document.write(`</br> People Object:</br> ${peopleObject['p2']}`);

// NESTED OBJECT
let user = {
    firstName: "James",
    lastName: "Bond",
    hobby:{
        coding:"JS",
        tvShow: "Game of Thrones"
    }
};
document.write(`</br> People Object:</br> ${user.hobby.tvShow}`);
document.write(`</br> People Object:</br> ${user['hobby']['coding']}`);

// myobj = peopleObject
// document.write(myobj)
// console.log(peopleObject)
// Access object data using the bracket notation

// Access object data using the dot notation




// Update an object data using the bracket notation
document.write(`</br>`);
peopleObject.p1 = "Zainab Abu";
peopleObject['p2'] = "Akansha Dhote";

document.write(`</br> People Object:</br> ${peopleObject.p1}`);
document.write(`</br> People Object:</br> ${peopleObject.p2}`);

user.hobby.coding = "JavaScript"
document.write(`</br> People Object:</br> ${user[ 'hobby' ][ 'coding' ]}`);

// Add new property to an object data using the bracket notation

document.write(`</br>`);
peopleObject.p8 = ["A", "B", "C"];
document.write(`</br> People Object:</br> ${peopleObject.p8}`);
document.write(`</br> People Object:</br> ${peopleObject.p8[1]}`);
document.write(`</br> People Object:</br> ${peopleObject.p8[2]}`);
document.write(`</br> People Object:</br> ${peopleObject.p8[0]}`);

//This is for when JSON object is delivered with local storage


