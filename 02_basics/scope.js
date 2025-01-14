//block scope
//global scope
let a = 10
function scopee(){
    const name = "rakhi";
    const a = 20
    return a
    
}
let result = scopee()
// console.log(result);   //BLOCK SCOPE


// console.log(a);  //GLOBAL SCOPE
function one() {
    const username = "Rakhi";
    function two() {
        const website = "utube";
        // console.log(username);  // Logs "Rakhi"
        // console.log(website);   // Logs "utube"
    }
    two();
}

one();


// ********************INTRESTING*******************


// THERE ARE TWO TYPE OF FUNCTION DECLARATION
console.log(addone(5));

function addone(num) { 
    return num+1
}
console.log(addTwo(5));             //HOSTING
//DECLARATION OF FUNCTION WITH HOLDING IN A VARIABLE
const addTwo = function(num) { 
    return num+2
}
