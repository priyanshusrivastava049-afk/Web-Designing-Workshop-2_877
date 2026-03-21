// console.log("hello world");
// function showalert(){
// alert("hello");}

//(20-03-26)

// var name = "john";
// var age =35;
// var isemployed=true;
// console.log(name);
// console.log(age);
// console.log(isemployed);
// var age=40;
// console.log(age);

// if(true){
//   var age = 30;
// }
// // console.log(age);
// let greeting = "Hello , " + name + " you are " + age + "years old ";
// console.log(greeting);
// let message = `hello ${name} , you are ${age}  years old `;

// -- PRIME NUMBER --

function isPrime(n) {
    if (n <= 1) return false;  
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;       
        }
    }
    return true;                
}
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false