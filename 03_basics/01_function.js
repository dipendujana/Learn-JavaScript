// function sayMyName() {
//     console.log("D");
//     console.log("I");
//     console.log("P");
//     console.log("E");
//     console.log("N");
//     console.log("D");
//     console.log("U");
// }
// // sayMyName()

//  function addTwoNumbers(number1, number2){  // pera miter 

// //    console.log(number1 + number2);
//   }
//     //   addTwoNumbers(3,"a") //argument

// function addTwoNumbers(number1, number2){  // pera miter 

// let result = number1 + number2
// return  result                   
// return number1 + number2        // note* return ar pore kono consol kaj kore na 

// }

// // const result = addTwoNumbers(3,5)  // argument

// console.log("Result:",result);

// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// function logUserMessage(username ){  
// //function logUserMessage(username = "sam"){  // = "sam" ar mane defoult value

//  // if (username === undefined)      //ay line tao thik
//   if (!username) {                  // ay line tao lekha jay ! ulto kore dei value ke
//     //  console.log("Place Enter Username :)");
//       return
//   }
//   return `${username} Just logged in`
// }
// // console.log(logUserMessage("Dipendu"))
// //console.log(logUserMessage()) // kono value na dile undefined Just logged in

// //++++++++++++++++ function with object and arrya ++++++++++++++++++++//

// function calculeteCarPrice(valu1,valu2,...num1){  // ... ar mane hil rest operator abar ... spred operator ar jonno hoy
//     return num1
// }
// //console.log(calculeteCarPrice(200,400,600,800));

// const user = {
//     username: "Dipendu",
//     price: 199
// }
// function handelObject(anyObject){
//     console.log(`username is ${anyObject.username} price is ${anyObject.price}`);
// }

// // handelObject(user)
// handelObject({
//     username: "Kolkata ka banda",
//     price: 399
// })

// const myNewArrya = [200,300,400]
// function returnSecendValue(getArrya){
//     return getArrya[1]
// }
// console.log(returnSecendValue(myNewArrya));
// console.log(returnSecendValue([200,300,400]));




// ======================== Hitassh Sir code ===============================//


function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));



function usercoco(coco){
    let userOne = `${coco} just log in`
    console.log(userOne);
    return userOne
    
}
// console.log(usercoco("cocoMaster"));
// console.log(usercoco);

function addTwonum(num1,num2){
    console.log(num1+num2);
}
// addTwonum(20,10)
// const sumofNumber = addTwonum(20,10) //30

function addTwonum(num1,num2){
    // console.log(num1+num2);
    let sumof = (num1+num2)
    return sumof
}
// addTwonum(20,10)
// const sumofNumber = addTwonum(20,10) //empty
const sumofNumber = addTwonum(20,10)
// console.log(sumofNumber);
// console.log(addTwonum(20,10));

function TCSuser(username){
    return(`${username} just join`)
}
// console.log(TCSuser("Suman"));  //Suman just join
// console.log(TCSuser());      //undefined just join
// console.log(TCSuser("P"));      //P just join

function TCSuser(username){
    if (undefined===undefined) {
        console.log("plase enter a username: ");
        return
    }
    return(`${username} just join`)
}

// console.log(TCSuser()); //plase enter a username: 
                           //undefined

function TCSuser(username){
    if (!username) {
        console.log("plase enter a username: ");
        return
    }
    return(`${username} just join`)
}
//  console.log(TCSuser());  //using ! syntex 

function TCSuser(username = "sam"){     //defoult ekta value deba hole
    if (!username) {
        console.log("plase enter a username: ");
        return
    }
    return(`${username} just join`)
}
//  console.log(TCSuser("pratim"));  // value dile ager value ta rewrite hoye jabe

 const TCSuserKolkata =(username) =>{
    return(`${username} just log in `)
 }
// console.log(TCSuserKolkata("Denver"));




const userinput = {
    name: "dipendu",
    age: 22
}
function alluserinput(objectinput){
    console.log(`User name is: ${objectinput.name} and age is ${objectinput.age}`);
}
// alluserinput(userinput)
alluserinput({
    name: "Bob",
    age: 60
})

const arryais = [10,15,20]

function returnsecondarray(getArrays){
    return getArrays[2]
}
console.log(returnsecondarray(arryais));
