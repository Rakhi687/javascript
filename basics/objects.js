//singleton(constructor) Object.create
// object has keys and values
//object literals
const mysym = Symbol("key1")  // how to define a symbol in object,immutable primitive value,unique object property keys

const jsuser = {
    name: "Rakhi",
    age:23,
    location: "Odisha",
    email: "rak@mail.com",
    isLoggedIn: false,
    [mysym]:"mykey1"
}
console.log(jsuser["email"]);//frequently used
// console.log(jsuser.email);
// console.log(jsuser[mysym]);
// console.log(typeof mysym);


//to change the value of object
jsuser.email = "nandu@gmail.com"
// console.log(jsuser["email"]);


//to make save a value(unchanged)
Object.freeze(jsuser)
jsuser.email = "priyanka@gmail.com"
// console.log(jsuser["email"]);

jsuser.greeting = function () { 
    console.log("hello user");
    
}
jsuser.greetingTwo = function () { 
    console.log(`hello ${this.name}`);
    
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());






