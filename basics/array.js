const myarr = [1, 2, 34, 5]
// console.log(myarr[0]);

const myarr2 = new Array(1, 2, 3, 4, 5)
// console.log(myarr2);

myarr2.push(6)
myarr2.pop(6)

// console.log(myarr2);
myarr.unshift(9)
myarr.shift()
// console.log(myarr.includes(9));
// console.log(myarr.includes(5));
// console.log(myarr.indexOf(2));
const newarr=myarr.join()
// console.log(newarr);
// console.log(myarr);

//slice
console.log(myarr);
const myn1 = myarr.slice(1, 3)//it give subset of the range
console.log(myn1);
const myn2 = myarr.splice(0,2)//it delete that perticular range of number
console.log(myn2);








