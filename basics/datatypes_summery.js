//primitive:7types:-String,Boolean,Number,BigInt,null,undefined,Symbol


//non-primitive(reference):-
//Array,Object,Function
   
//javascript is a dynamically typed language

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId)
//both have different value
const bignum = 12345786453256n
//console.log(typeof bignum);


const heros = ["Ram", "laxman", "doga"]//array

letmyObj = {
    name: "Rakhi",    //object
    age:"23",
}//datatype is object

const myFunction = function () { 
    //console.log("Hello World!");
}//datatype is object

//++++++++++++++++++++++++++++++++++++++++

// stack:primitve type data storage
// heap: non - primitive type data storage

//

let myname = "Rakhi"
let anothername = myname      //call by value
anothername="Nandu"
// console.log(anothername);
// console.log(myname);

let userOne = {
    email: "rak@123",
    userId:"rak@ybl"
}
let usertwo = userOne
usertwo.email="rakhi@google.com"
console.log(usertwo.email);
console.log(userOne.email);








