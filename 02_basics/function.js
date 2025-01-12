//function is a keyword for FUNCTION
//syntax: function functionName(){}


function saymyName() {
    console.log("Rakhi");
}

saymyName() // saymyName is a REFERENCE CALLED


// function addTwoNumbers(number1,number2){ //HERE NUMBER1 AND NUMBER2 ARE PARAMETERS
//     console.log(number1+number2);
    
// }
// addTwoNumbers(2,3) //HERE 2,3 ARE ARGUMENTS



function addTwoNumbers(number1, number2) { 
    // let result=number1+number2
    // return result
                              
    return number1+number2

}                                  //SCOPE
// const result = addTwoNumbers(3, 5)
// // console.log("result:",result);

// function logInUser(username) {
//     if (username === undefined || null || " ") { 
//         console.log("please enter a username");
        
//     }
//     return `${username} just logged in`
    
// }
// console.log(logInUser("Rakhi"));
// console.log(logInUser(null));
// console.log(logInUser( ));

function logInUser(username) { 
    if (!username) { 
        console.log("enter a valid user name");
        return
        
    }
    return `${username} just logged in`
}
// console.log(logInUser());
// console.log(logInUser(""));      //UNDEFINED
// console.log(logInUser(null));
// console.log(logInUser("Rakhi"));
//WE CAN ALSO DEFINE DEFAULT VALUES LIKE function logInUser(username="SAM")

function calculatecartprice(VAL1,VAL2,...num) { 
    return num,VAL1,VAL2
}                                  //... IS THE REST OPERATOR ALLOW ALL THE VALUE TO PRINT
console.log(calculatecartprice(300, 400, 500, 700));
console.log(calculatecartprice(300,400,500,700));
