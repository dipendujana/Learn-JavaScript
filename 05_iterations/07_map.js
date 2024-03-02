const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumers.map( (num) => { return num + 10})

// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)


// console.log(newNums);

const shoppingCart = [
    {
        itemName: "Js cource",
        price:299
    },
    {
        itemName: "cpp cource",
        price: 399
    },
    {
        itemName: "Java cource",
        price: 799
    },
    {
        itemName: "python cource",
        price:699
    },
    {
        itemName: "app dev cource",
        price:99
    }
]
// const pricetoPay= shoppingCard.reduce((acc ,item) => acc + item.price,0)
// console.log(pricetoPay);


// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);


const pricetoPay= shoppingCart.reduce((acc ,item) => acc + item.price,0)
console.log(pricetoPay);