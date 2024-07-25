//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

// ++++++++++++++++++++++++++ global and local scope 
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"        // {}  karli bakes ar modhhe thakne local r baire thakle global
        console.log(username);
    }
    // console.log(website);

    //  two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5)
const addTwo = function(num){     //eta Expression       //ekhane error dibe karaon variable name diye diclaer korar por  variable ar opore addTwo kore call kora jabe na
    return num + 2
}

//=============================================//

let x = 500; 

if (1) {
    let x = 10;
    const y = 20;
    var z = 30;
    // console.log("Inner side: ",x); //Inner side:  10
}

// console.log(x); //500

// ===============================================//
// closure  
// Lexical scoping

function init() {
    var name = "Dipendu"; 
    function displayName() {
      console.log(name); 
    }
    displayName();
  }
  init(); //Dipendu



// ++++++++++++++++++ interesting ++++++++++++++++++
//Hoisting
console.log(addvalue(5))

function addvalue(num){
    return num + 1
}



// addTwovalue(5)
const addTwovalue = function(num){     //eta Expression       //ekhane error dibe karaon variable name diye diclaer korar por  variable ar opore addTwo kore call kora jabe na
    return num + 2
}
console.log(addTwovalue(5))
  