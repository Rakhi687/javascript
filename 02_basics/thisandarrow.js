//this:-current context
const user = {
    username: "rakhi",
    price: 999,
    welcomeMessage: function () { console.log(`${this.username},welcome to website`);
    
    // console.log(this);//IT WILL PRINT THE CURRENT VALUE OBJECT RAKHI,999THEN SAM,999

    }
    
    
}
// user.welcomeMessage()
//  user.username = "sam"
// user.welcomeMessage()
// console.log(this); IT REFERS TO AN EMPTY OBJECT

//GLOBAL OBJECT IN THE BROWSER IS WINDOW OBJECT

//standalone JavaScript engine IT EXECUTE THE CODE OUTSIDE THE BROWSER

 function chai() {
    const username="rakhi"        //OUTPUT:-UNDEFINED
     console.log(this.username);
    
 } //CANT USE THIS OBJECT IN FUNCTION 
//  chai()



// const chai = function () {
//     const username = "rakhi"
//     console.log(this.username);     //OUTPUT:-UNDEFINED
    
// }
//chai()
////////////////ARROW FUNCTION////////////////

const one = () => {
     username = "Rakhi";
    price = 99
    
    console.log(this.username);
    

}
// one()

//TYPE OF DEFINING ARROW FUNCTION
const Two = (num1, num2) => { 
    return num1+num2

}
console.log(Two(3, 4))
 
//SECOND TYPE
const three = (num1, num2) => (num1 + num2)
console.log(three(2, 9))


// const four = () => ({ username: "Rakhi" })
// console.log(four());


function john() { 
    const name = "Rakhi";
    let course = "MCA"
    console.log(this.name)
    
}
john()

const priya = () => {
    const name = "Rakhi"
    console.log(this);
    
}
priya();


const adding = (num1, num2) => num1 + num2
console.log(adding(3, 4));

const obj = () => ({
    username:"Rakhi"
}    
)
console.log(obj())




