console.log("Hello world");
// console.log("Hello world") logs "Hello world"
// on the console log
// console.log is a function
const numbers = [1, 2, 3, 4, 5];
// const is always making these numbers this array
// const means the variable will have the same value
// let means the variable could have a changing value
// [1, 2, 3, 4, 5] is an example of an array

numbers.forEach((number) => {
  //   Function parameters are the
  // names listed in the function definition.
  // () => {} is an arrow function

  // Function arguments are the real values passed to
  // (and received by) the function.
  console.log(number);
});
// alert("Hello Wrld");
// alert syntax above
let name = "aaron";
const position = 'intern'
var hobby = 'skateboarding'
console.log(name, position, hobby);

let firstName = "dub";
// let firstName makes my firstName a changing variable
const lastName = "wrld";
// const(constant) lastName makes my lastName a non changing variable
const gamerTag = (firstName + lastName)
// this is declaring a statement!
console.log(gamerTag);
// these are called string literals or strings

let age = 30;
// this is called a number literal

let isApproved = true;
// example of a boolean literal (true or false statements)
console.log("hello world");
// logs string on console

let x = 5;
let y = 6;
let z = x + y;
console.log(z);
// this logs 11 on the console because
// x = 5, y = 6, and z = x + y


// FUNCTIONS FUNCTION FUNCTIONS

function thisIsAFunction() {
  // this is calling a function
  // function() calls the function,
  // then name the function in camelCase

  // function name goes in between
  // the name of function and ()

  // thisIsAfunction is the function name,
  // can be anything in camelCase
  console.log("This is what a function is");
  console.log("hello");
  console.log("bye");
  // logs what is being "called" in this string everytime
  // the function is executed
}
thisIsAFunction();
thisIsAFunction();
thisIsAFunction();

function sum(a, b) {
  // sum is a keyword
  // sum is used to return the sum of the
  //  given arrays elements
  // If the array is empty then it returns 0
  console.log(a);
  // this would log 1 on the console
  // because a = 1
  console.log(a + b + a + b);
  // this would log 6 on the console because the a = 1,
  //  b = 2, and they get added together
}
sum(1, 2);

function function1(a, b, c) {
  // this is also calling a function
  console.log(a + b + c);
  console.log(a + a + a + a + a);
}
function1(" aaron ", "fue ", " derrick");
// this would log aaron, fue, derrick
// because we identified a,b,c as those names
// to be logged whenever function1 is called
// how do i get this string to print in the console multiple times?
// brackets?
// print the arguement for multiple log instances, ex.
// function1(" aaron ", "fue ", " derrick") is the arguement
function1(" aaron ", "fue ", " derrick");

function sum(a, b) {
  // calling the sum of the function a and b
  return a * b;
  // return keyword takes whatever that value is 
  // you're returning and puts it inside the 
  // variable of that function
const amount = sum(10, 10);
// amount is the variable in this situation
console.log(amount);
}