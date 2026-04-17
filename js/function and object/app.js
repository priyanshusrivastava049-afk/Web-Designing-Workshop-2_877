//array
let numbers = [1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
//array with multiole data type
let mixarray = [1,"hello" , true,{name : "alice"} , [1,2,3,4]];
console.log(mixarray[0]);
console.log(mixarray[1]);
console.log(mixarray[2]);
console.log(mixarray[3]);
console.log(mixarray[4]);
function multiply(a,b){
    return a*b;
}
console.log(multiply(10,3));

function divide(a,b){
    return a/b;
}
console.log(divide(10,3));

const add = function(a,b){
    return a+b;
};
console.log(add(5,7));

// arrow function 

let square = x => x*x;
console.log(square(5));

// arrow function with single parameter
const greetuser=(name) => {
    console.log(`hello , ${name} !`);
}
greetuser("Alice");

//map on array 
//map creates  a new array by applying a function to each element of the original array

let newarray = [1,2,3,4,5];
let squarearray = newarray.map((num) => num*num);
console.log(squarearray);