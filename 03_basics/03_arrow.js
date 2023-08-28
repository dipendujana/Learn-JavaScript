const user = {
    username: "Dipendu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

//console.log(this);

// function chai() {
//     let username = "dipendu"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "dipendu"         //result is undefine
//     console.log(this.username);
// }


const chai = () => {
    let username = "dipendu"         
    console.log(this);
}
// 

// const addTwo = (num1 , num2) => {
//     return num1 + num2              // Basics Arrow function
// }

//const addTwo = (num1 , num2) =>  num1 + num2       // this is the sentex of impleset return

// const addTwo = (num1 , num2) =>  (num1 + num2)
// console.log(addTwo(3 ,5));

// *note { } carlibases thakle return keyword dite hoy { return num1 + num2 }
// *note ( ) carlibases thakle return keyword dite hobe ni  (num1 + num2)

const addTwo = (num1 , num2) => ( {username: "dipensu"})
console.log(addTwo(3 ,5));

// const myArrat = [2,3,4,5]
