console.log("Hello world");
// console.log("Hello world") logs "Hello world"
// on the console log
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
let name = "dub";
console.log(name);

let firstName = "dub";
// let firstName makes my firstName a changing variable
const lastName = "wrld";
// const(constant) lastName makes my lastName a non changing variable
console.log(firstName, lastName);
// these are called string literals or strings

let age = 30;
// this is called a number literal

let isApproved = true;
// example of a boolean literal (true or false statements)
console.log("hello world");
// logs string on console

console.log("hello world");

console.log("hello world");

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
// function1(" aaron ", "fue ", " derrick");
function1(" aaron ", "fue ", " derrick");

function sum(a, b) {
  // calling the sum of the function a and b
  return a * b;
  // return is a statement that determines a value the
  // function will move outside of it, before ending
  // the function execution.
}
const amount = sum(10, 10);

console.log(amount);
