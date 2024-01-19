// Basic Calculator - 
//an example to how we can link functions to HTML elements and get user input values

// sumUp will take 2 values and add them together
function sumUp(valueOne, valueTwo) {
    //convert strings to numbers and add together  
    return Number(valueOne) + Number(valueTwo); // convert string value to a number value
  };
function minusDown(valueOne, valueTwo) {
    return Number(valueOne) - Number(valueTwo);
  }

function multiply(valueOne, valueTwo) {
  return Number(valueOne) * Number(valueTwo);
}

function divide(valueOne, valueTwo){
  return Number(valueOne) / Number(valueTwo);
}

function sqrt(valueOne, valueTwo){
  return Math.sqrt Number(valueOne):Number(valueTwo);
}
 
  // define some basic variables we need for the calculate function
  // const operator = ? // operation
  const numberOne = document.getElementById('numberone');  //INPUT 1
  const numberTwo = document.getElementById('numbertwo'); //INPUT 2
  const result = document.getElementById('result'); //Output
  
  
  //Calculate - the fuction that brings it all together
  function calculateAdd(){
    //sum calls the sumUP function and valueOne and valueTwo are provided inside brackets
    let sum = sumUp(numberOne.value, numberTwo.value); //
    // numberOne.value = will get the input from the user for that box (2, 67, 890)
    result.value = sum.toString();
    //result is converted to a string and applied to the value property of our result input
  };/**/
function calculateMinus(){
  let minus = minusDown(numberOne.value, numberTwo.value);

  result.value = minus.toString();
}

function calculateMultiply(){
  let multi = multiply(numberOne.value, numberTwo.value);

  result.value = multi.toString();
}

function calculateDivide(){
  let divide1 = divide(numberOne.value, numberTwo.value);

  result.value = divide1.toString();
}

function calculateSqrt(){
  let sqrt1 = sqrt(numberOne.value, numberTwo.value);

  result.value = sqrt1.toString();
}


  