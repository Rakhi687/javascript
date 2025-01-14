//block scope
//global scope
let a = 10
function scopee(){
    const name = "rakhi";
    const a = 20
    return a
    
}
let result = scopee()
console.log(result);   //BLOCK SCOPE


console.log(a);  //GLOBAL SCOPE
