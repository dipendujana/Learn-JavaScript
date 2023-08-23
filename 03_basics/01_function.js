function sayMyName() {
    console.log("D");
    console.log("I");
    console.log("P");
    console.log("E");
    console.log("N");
    console.log("D");
    console.log("U");
}
//sayMyName()

//  function addTwoNumbers(number1, number2){  // pera miter 

//    console.log(number1 + number2);
//  }

function addTwoNumbers(number1, number2){  // pera miter 

// let result = number1 + number2
// return  result                    // note* return ar pore kono consol kaj kore na 
   return number1 + number2

}

const result = addTwoNumbers(3,5)  // argument

//console.log("Result:",result);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

function logUserMessage(username ){  
//function logUserMessage(username = "sam"){  // = "sam" ar mane defoult value

 // if (username === undefined)      //ay line tao thik
  if (!username) {                  // ay line tao lekha jay ! ulto kore dei value ke
      console.log("Place Enter Username :)");
      return
  }
  return `${username} Just logged in`
}
// console.log(logUserMessage("Dipendu"))
console.log(logUserMessage()) // kono value na dile undefined Just logged in

