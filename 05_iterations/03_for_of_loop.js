// for of
// [" " , " "," "]
// [{}, {},{}]
const arr = [1,2,3,4,5]
for (const num of arr) {    
   // console.log(num);
}

const greetings = "Dipendu jana"
for (const greet of greetings) {
  //  console.log(`each char is ${greet}`);
}

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")               // map store only unice value no repitation allow
map.set('IN',"INDIA")
map.set('IN', "India")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

 let myArr = [1,2,3,4,5,]
 for (const num of myArr) {
  console.log(num);
 }