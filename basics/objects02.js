//singletonObjects
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "rak@123"
tinderUser.name = "rakhi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "rakhi@gmail.com",
    fullname: {
        userfullname: {              //nested objects
            firstname: "Rakhi",
            lastname:"Pradhan"
            
        }
    }
}


// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b", 3: "d" }
const obj2 = { 3: "c", 5: "p", 6: "u" }     //used to combine objects by their value and key

const obj3 = Object.assign({}, obj1, obj2)
const obj4 = {...obj1,...obj2,...obj3}//spread the values
// console.log(obj4); 

// console.log(obj3);

//objects in array

const users = [
    {
        name: "Rakhi",
        mail:"rak@gmail.com"
    },
    {
        phno: 8926034445,
        class: "7th"
    },
    {
        age:18
    }
]
// console.log(users[0].mail); //to retrive element of an array with objects

// console.log(Object.keys(regularUser));  // to retive the keys of objects

// console.log(Object.values(regularUser));


// console.log(regularUser.hasOwnProperty("email"));

// console.log(regularUser.hasOwnProperty("mail"));

//OBJECT DE-STRUCTURING
const course = {
    coursename:"javascript",
    coursefees:"999",
    courseInstructor:"dev"
}

//TO EXTRACT MULTIPLE VALUE
console.log(course.coursefees);

const { courseInstructor:cinst } = course
console.log(cinst);  //TO DEMODIFY THE VALUE OF THE OBJECT BY UR OWN VARIABLE


//JSON(JAVASCRIPT OBJECT NOTATION)format in API

// { 
//     "NAME": "rakhi",
//         "age": 23,
//             "isLoggedIN":false
    
// }
