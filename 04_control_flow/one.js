// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===(dupase soman hote hobe 3 = 3 hole thik, 3 = "3" eta vul, dupase num, ba string  ekpase num ekpase string hole hobe na ) , !== 

//+++++++ Scope +++++++++//

// const score = 200

// if (score > 100) {
//     let power = "fly" //  var power = "fly" ekhane var dile run korbe kintu , run hoba thiknoy *karon
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);    // *karon eta scope ar baire

//++++ Short Hand notetion +++++//

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");  //Short Hand notetion

//+++++++++++++++ 


// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
