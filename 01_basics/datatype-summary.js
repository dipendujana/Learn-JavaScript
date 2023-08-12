// Primitive 
// 7 type: String,Number,Boolearn,null,undefined,symbol,BigInt

// Reference (Non Prinimitive)
// Array, Object , function 

const outsideTemp = null
console.log(outsideTemp);

const id = Symbol('123')
const anatherId = Symbol('123')
console.log(id === anatherId) // symbol eki rokom dekte onke hote pare

const bigNumner = 123647620289n

const heros = ["shaktiman","kaliya","Ben10"] // Arrya

let myObj={
    name: "dipendu", //object ke diffine kora hoy {} modhha
    age: 22,
}

const myFunction = function(){
    console.log("Hello World!");
}

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Type of val	           Result
// Undefined	         "undefined"
// Null	             "object"
// Boolean	             "boolean"
// Number	             "number"
// String               "string"
// Object (native and does not implement [[Call]])	"object"
// Object (native or host and does implement [[Call]]) =>	"function"
// Object (host and does not implement [[Call]]) =>	Implementation-defined except may not be "undefined", "boolean", "number", or "string".