//primitive:7types:-String,Boolean,Number,BigInt,null,undefined,Symbol


//non-primitive(reference):-
//Array,Object,Function
   
//javascript is a dynamically typed language

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)
//both have different value
const bignum = 12345786453256n
console.log(typeof bignum);


const heros = ["Ram", "laxman", "doga"]//array

letmyObj = {
    name: "Rakhi",    //object
    age:"23",
}//datatype is object

const myFunction = function () { 
    console.log("Hello World!");
}//datatype is object



