console.log("Hello world");
// console.log("Hello world") logs "Hello world"
// on the console log
// console.log is a method
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
const position = "intern";
var hobby = "skateboarding";
console.log(name, position, hobby);

let firstName = "dub";
// let firstName makes my firstName a changing variable
const lastName = "wrld";
// const(constant) lastName makes my lastName a non changing variable
const gamerTag = firstName + lastName;

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
  // sum is a KEYWORD
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
  return a + b;
  // return keyword takes whatever that value is
  // you're returning and puts it inside the
  // variable of that function
  // amount is the variable in this situation
}
const amount = sum(10, 10);
console.log(amount);

// ARRAYS AND ARRAY METHODS

const items = [
  { name: "Keyboard", price: 50 },
  { name: "Mouse", price: 30 },
  { name: "Mic", price: 60 },
  { name: "Controller", price: 80 },
  { name: "Headset", price: 60 },
  { name: "Monitor", price: 100 },
  { name: "PC", price: 2000 },
];

const filteredItems = items.filter((item) => {
  return item.price <= 85;
  // FILTER array method
  // type of array
  // this array is saying all items less than or equal to
  // $85 in price will show in filteredItems array
});

console.log(items);
console.log(filteredItems);

const itemNames = items.map((item) => {
  return item.price;
});

console.log(itemNames);

function recursiveFunction(numb, value) {
  let start = Date.now();
  // recursive function repeats the application of a rule
  if (numb <= 1) {
    let end = Date.now();
    console.log(`Time recursion: ${end - start}`);
    return;
  }
  numb = numb / 2;
  recursiveFunction(numb, value);
}

recursiveFunction(10000000, "Im a recursive function ");

let start = Date.now();
for (let i = 1000; i >= 0; i -= 1) {
  if (i == 0) {
    let end = Date.now();
    console.log(`Time loop: ${end - start}`);
  }
}
