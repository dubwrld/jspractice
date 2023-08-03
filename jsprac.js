console.log("Hello world");
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number);
});
// alert("Hello Wrld");
// alert syntax above
let name = "dub";
console.log(name);

let firstName = "dub";
const lastName = "wrld";
console.log(firstName, lastName);
// these are called string literals

let age = 30;
// this is called a number literal

let isApproved = true;
// example of a boolean literal (true or false statements)
console.log("hello world");
// logs string on console

console.log("hello world");

console.log("hello world");

// FUNCTIONS

function thisIsAFunction() {
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
  console.log(a + b + c);
  console.log(a + a + a + a + a);
  
}
function1([" aaron ", "fue ", " derrick"]);
// this would log aaron, fue, derrick
// because we identified a,b,c as those names
// to be logged whenever function1 is called
// how do i get this string to print in the console multiple times?
// brackets?
