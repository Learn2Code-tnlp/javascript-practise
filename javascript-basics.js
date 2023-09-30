console.log(2, "Tanikella", "Prasanna");

//alert("hello");

//var 1plus = 6; //wrong declaration of a variable

// valid identifiers are those which have only characters, $ or underscore , no other special chars
// Only alphabets, numbers, $, and _ are allowed in a variable name. No other character is permitted.
// You cannot start a variable name with a number. It can only start with a letter or the $ sign, or an _.
var oneplus = 6;
var $oneplus = 6;
var _oneplus = 6;

// JS is case sensitive language VAR is not allowed

//declare and init a variable;
var firstName = "Tanikella";
var lastName = "Bharani";
console.log(firstName);

//take the value of a variable from a user
//var name = prompt("your name?");
console.log(name);

//manipulating variable
var x = 10;
x = 12;
console.log(x);

//OPERATORS
var x = 6;
y = 2;

//arithmetic

console.log("x", x);
console.log("y", y);

console.log("add", x + y);
console.log("sub", x - y);
console.log("mul", x * y);
console.log("div", x / y);
console.log("modulus", x % y);
console.log("exponent", x ** y);

//relational operators
console.log("x>y", x > y);
console.log("x<y", x < y);
console.log("x>=y", x >= y);
console.log("x<=y", x <= y);

//equality operator
console.log("x==y", x == y);

//logical operators
var x = 2 > 6;
var y = 6 > 2;
console.log("x&&y", x && y);
console.log("x|| y", x || y);

//assignment operator
var x = 10;
var x = 20;

console.log(x, y);

//preceedence and associativity
//(3/3) - grouping operator preceedence of 20
// exp operator has preceedence 15
var x = 3 ** (3 / 3);
console.log(x);

// associativity(left to right) - what the translator will do if we have opertors with same preceedecnce?

var x = 125 / 25 / 5;
// 2 posble outputs are 1 and 25
//correct  o/p is 1

var str = "'upgrad' is a learning platform";
console.log(str);

var str = '"upgrad" is a learning platform';
console.log(str.length);

//coercion - hat type coercion is the process in which one data type is converted to another to perform an operation.
var x = "Up" + 1;
console.log(x);

//
var x = "20";
var y = "2";

var div = x / y;
//compiler is intelligent enough to convert "" strings as numbers as bot are numbers even though we are performing arithmetic operation on 2 strings

console.log(div);

//
var x = "20";
var y = "2a";

var div = x / y;
//compiler is intelligent enough to convert "" strings as numbers as bot are numbers even though we are performing arithmetic operation on 2 strings

//console.log(isNan(div)); //gives Nan

//hw to convert number to string
var x = 20;
x = x.toString();
console.log(x);

//string to number
var x = "string";

console.log(Number("10a")); //returns Nan
parseInt("10.20"); //prints 10
parseInt("102a"); // prints 102

//boolean
console.log(22 > 0); // true
console.log(18 == 18); //true
console.log(true && false); //false

console.log(0 || true); //true
console.log(false == 0); //true

//null
var marks = null;
console.log(marks);

marks = 10;

//undefined - variable is declared but not yet assigned value
var marks;
console.log(marks);

console.log(null == undefined); // returns true becoz of JS dcos

//console.log(isNan(1 + null)); //false

//console.log(isNan(1 + undefined)); //true

var x;
console.log(x); //undefined

console.log(x); // x is not defined error

//type of operator
console.log(typeof 12); //number
console.log(typeof null); //object

// === also checks datatype along with value
console.log(0 == "0"); //true
console.log("0" === 0); // false

//javascript arrays
var arr; //declaration
arr = ["Apple", "Mango", "Peach", "Grape"]; //initialization
console.log(arr);

console.log(arr[0]);

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//changing a value inside array
arr[2] = "litchi";

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//how to insert an element to the end of array when we know the length
arr[4] = "dragon";
console.log(arr);

// if we dont know length, push function can be used to insert a new element to the end of the array
arr.push("Muskmwlon");
console.log(arr);

// to insert a new element at start of array
arr.unshift("Banana");
console.log(arr);

//delete an element from the end of the array
arr.pop();
console.log(arr);

//delete an element from the start of the array
arr.shift();
console.log(arr);

// JS ARRAY CAN STORE VARIABLES OF DIFFERENT DATA TYPES
var developer = ["Srishiti", "Mumbai", "25", "false", true];
console.log(developer);

//You are given an array named carNames consisting of 4 car values - Honda, Ferrari, Porsche, and Fiat.
var carNames = ["Honda", "Ferrari", "Porsche", "Fiat"];
console.log(carNames);
// Remove Fiat from the end of the array and then print the array carNames
carNames.pop();
console.log(carNames);
// Add Mazda to the end of the array and then print the array carNames
carNames.push("Mazda");
console.log(carNames);
// Remove Honda from the beginning of the array and then print the array carNamescarNames.push("Mazda");
carNames.shift();
console.log(carNames);
// Add Ford to the beginning of the array and then print the array carNames
carNames.unshift("Ford");
console.log(carNames);

//slice(): The slice() method returns a copy of a portion of an array into a new array object that is selected from “begin” to “end” (end not included).
//splice(): The splice() method is used to change the contents of an array by removing the existing elements and/or adding new elements.

//objects in javascript
var book1 = {
  title: "X",
  pages: 1000,
  isAvailable: true,
};

//to access any property from a aobject
console.log(book1.title);

//object inside an object
var book2 = {
  title: "X",
  pages: 1000,
  "is-Available": true, // is-Available is actually an invalid js identifier and is not allowed. but what if we need such identifiers as keys in an object? - WE WRAP keys inside a single quote or double quote
  author: {
    name: "3.r.r",
    nationality: "british",
  },
};

//to access any property from a aobject
console.log(book2.title);

// Accessing the leys of an object
//dot notation
console.log(book1.title);

//console.log(book2."is-Available"); //this will give key not defined

//bracket notation

console.log(book2["is-Available"]);

//accessing a key of nested object
console.log(book2.author.name);

console.log(book2["author"]["name"]);

//print all prop pairs of an object using for..in loop
for (var key in book1) {
  console.log(key + " = " + book1[key]);
}

//chaning values of keys in an object
book2.title = "Y";
console.log(book2);

//insert a key-value pair into an object
book2.price = 500;
console.log(book2);
book2["price"] = 600;
console.log(book2);

//window object
// console is afunction defined in window object
console.log(this);

//JAVASCRIPT FUNCTIONS

function applyDiscount() {
  var cartAmount = 1560;
  var discount = 100;
  cartAmount -= discount;
  return cartAmount;
}

console.log(applyDiscount());

//function with params

function applyDiscount(cartAmount) {
  var discount = 100;
  cartAmount -= discount;
  return cartAmount;
}

console.log(applyDiscount(2000));

//functions
//args are the values which are being passed from a calling function
//params are the variables containing the actual values in the functyion declaration

//example swap function
function swap(a, b) {
  var temp;
  temp = a;
  a = b;
  b = temp;
}

//swapping more than one time in a program - then we pt this swap logic inside a func and call the function

//types of functions
// it is not mandatory for a function to return something. By default a function returns "undefined" if there is no return statement
//what happens when we call a function which neither prints anything nor returns anything like below one

function foo() {
  var x = 1;
}

console.log(foo());

//anonymous function

//actual function - applyDiscount name is not required now as we are aiisging it to a varaible
var givedisocunt = function applyDiscount(cartAmount) {
  var discount = 100;
  cartAmount -= discount;
  return cartAmount;
};

var givedisocunt = function (cartAmount) {
  var discount = 100;
  cartAmount -= discount;
  return cartAmount;
};

console.log(givedisocunt(3000)); //calling anonymous function

// Assign a function to an object's key - function is now called a method

var user = {
  name: "prasanna",
  greet: function () {
    console.log("hello geet");
  },
};

console.log(user.greet());

// example alert is also a method not a function
