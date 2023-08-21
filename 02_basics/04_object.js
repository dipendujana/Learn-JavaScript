//const tenderUser =  new Object()  singleton object
const tenderUser = {}  // non singleton object
tenderUser.id = "123abc",
tenderUser.name = "Dipendu",
tenderUser.isLogeedIn = false
//console.log(tenderUser);

const regulerUser = {
    email: "dipendu@gamil.com",
    fullname: {
        uderFullname: {
            fistName: "Dipendu",
            lastName: "Jana"
        }
    }
}

//console.log(regulerUser.fullname.uderFullname.fistName);

//+++++++++ how to marge object +++++++++++++++++++//

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4: "d"}
const obj3 = {5:"e", 6: "f"}

//const obj = {obj1,obj2,obj3}
//const obj = Object.assign({},obj1,obj2,obj3)
const obj = {...obj1,...obj2,...obj3}  // usinge spader operator 

//console.log(obj);

//++++++++++++ Data base diye ki rokon vale ase dekha jak +++++++++++++++++//

const usre = [
    {
        id:1,
        email: "Dipend@gamail.com",
    },
    {
        id:1,
        email: "Dipend@gamail.com",
    },
    {
        id:1,
        email: "Dipend@gamail.com",
    }
]
usre[1].email
console.log(tenderUser);
console.log(Object.keys(tenderUser));
console.log(Object.values(tenderUser));
console.log(Object.entries(tenderUser));

console.log(tenderUser.hasOwnProperty('isLogeed'));


//+++++++++++++++++++++++ Object de-structure  ++++++++++++++++//
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  //courseInstructor ke instructor de-structure kora hoye che 

// console.log(courseInstructor);
console.log(instructor);

// {                                                 //  JSON formet on oject
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},                                              //  //  JSON formet on arrya
    {}
]
