// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

 const myArr2 = new Array(1, 2, 3, 4) //ay rokom vabeo arrya dicler kora jay
// console.log(myArr2[1]);
// Array methods

// myArr.push(10)
// console.log(myArr);
// myArr.push(7)
myArr.pop()
// console.log(myArr);




// myArr.unshift(9) // unshift array ar samne ekta element add kore dey in this case [9,0,1,2,3,4,5]

// myArr.shift()  // shift ar somoy samner ekta element chole jay like [1,2,3,4,5]
//console.log(myArr);

 // console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1, 3)  

console.log(myn1);         // [ 1, 2 ]
console.log("B ", myArr); // B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);  // C  [ 0, 4, 5 ]  //splice operation a main arr tay change hoye jai and amin arrya theke oi arrya ta beri jay ([ 0, 1, 2, 3, 4 ]) eyta theke ay ta => ([ 0, 4 ])
console.log(myn2); // [ 1, 2, 3 ]

