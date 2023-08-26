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

     two()

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


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){         //ekhane error dibe karaon variable name diye diclaer korar por  variable ar opore addTwo kore call kora jabe na
    return num + 2
}
