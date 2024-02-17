function myName(){
    console.log("D");
    console.log("i");
    console.log("p");
    console.log("e");
    console.log("n");
    console.log("u");
}
// myName()


// function sum(num1,num2){
//     console.log(num1+num2);
// }

function sum(num1,num2){
    // let result = num1 + num2
    //  return result
    return num1 + num2
}

const result= sum(3,1)
// console.log("Resunt :",result);

function usermasseg(username){
    if(!username){
        console.log("Please entey your name:");
        return
    }
    return `${username} just loged in`
}

console.log(usermasseg("p"));
