// /ES6 introduced two new ways of declaring variables: let and const. Before let and const were intr
//using the let keyword when you want to change its value in the future. On the other hand, you must declare a variable with the const keyword when you never want to change its value.
//the var keyword, which you have been learning about under ES5, is similar to the let keyword. In fact, you can change the values in variables declared using either of these keywords. Nevertheless, there is a difference between let and var.
//In the video, you learned an important difference between the keywords var and let/const. Variables declared using the var keyword are function-scoped, whereas variables declared using the let and const keywords are block-scoped.

//CLASSES
// Classes are, in fact, “special functions.”
// child class can inherit the properties and methods of a parent class using the  keyword “extends.”  An important point to note is that when a child class is implementing a parent class, you should call the function super() inside the constructor of the child class. This will call the constructor of the parent class first in order to derive the parent class’s properties and methods. Also, remember that before using the keyword “this” inside a class’s constructor, you need to call the function super(). All classes in JavaScript extend the object class by default.

//  Using classes is an alternative to using the prototypal inheritance achieved with the prototype chain, which you saw in the earlier segment.
//  Apart from the constructor, you can also define other functions inside a class. You can write something like this.

class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Employee extends Person {
  constructor(name, id) {
    super(name);
    this.id = id;
  }

  getID() {
    return this.id;
  }
}

let emp = new Employee("Srishti", "E101");
console.log(emp.getName(), emp.getID());
//aro functions-----------------------------------------------------------------------------------------------------------------------
let person1 = {
  name1: "Sakshi",
  name2: "Jain",
  get: function () {
    console.log("outer1: " + this.name1);
    let print = function (role, type) {
      console.log("inner1: " + this.name1); // IT PRINTS WOAHHH
    };
    print();
  },
};
console.log(person1.get());

// converting to an arrow function
//
let person2 = {
  name1: "Sakshi",
  name2: "Jain",
  get: function () {
    console.log("outer1: " + this.name1);
    let print = () => {
      console.log("inner1: " + this.name1); // IT PRINTS WOAHHH
    };
    print();
  },
};
console.log(person2.get());

//This happened because arrow functions do not have a keyword “this” of their own. Thus, “this” inside an arrow function will point to the scope of the arrow function inside which it is written.

//chaning outer function also to arrow function
let person3 = {
  name1: "Sakshi",
  name2: "Jain",
  get: () => {
    console.log("outer1: " + this.name1);
    let print = () => {
      console.log("inner1: " + this.name1); // IT PRINTS WOAHHH
    };
    print();
  },
};
console.log(person3.get());
//here this from inner fun points to outer function context which in turn points to gloabl/window object

//-------------------------------------map, filter, reduce method for arrays ------------------------------------------------------
a = [10, 20, 30];
console.log(a);
console.log(
  a.map(function (item) {
    return item * 5;
  })
);

///filter
console.log(a);
console.log(
  a.filter(function (item) {
    return item == 10;
  })
);

//reduce values in array toa single value
console.log(a);
a.reduce(function (x, y) {
  console.log("x: ", x, " y: ", y);
  return x + y; // x is accumulator where the value after each itr gets stored and finally this value is returned
});

//spread operator
//spread operator can break an array down to its individual components and, quite literally, spread the array.
getSum = function (a, b, c) {
  return a + b + c;
};

var arr = [1, 2, 3];

// adding all elements of array
getSum.apply(null, arr);

//doing same with spread operator
getSum(...arr);

//console.log(...a, ...b); //will concatenate 2 arrays

//make copy of an array using spread operator
a = [1, 2, 3];
console.log(a);
a1 = [...a]; //copy by value of a
console.log(a1);
a1.push(2);
console.log(a1);
console.log(a);

obj = { a: 1, b: 2 };

//make a copy of obj using es5
obj2 = Object.assign({}, obj); //copy by value
console.log(obj2);
//copying using es6 spread operator
obj3 = { ...obj };

//rest parameters
//ow to pass individual elements into a function and have them treated as an array or object using rest parameters.

function add(...arr) {
  let sum = 0;
  arr.forEach((element) => (sum += element));
  return sum;
}

add(1, 2);

//remember that rest operators should be written at the end inside the function declaration and not in the midst of a set of arguments.
//Rest parameters are also useful in the case of arrow functions.

const foo1 = (...args) => {
  console.log(args[0]);
};

foo1(10, 20);

// the spread operator and the rest parameters are the opposite of each other. While the spread operator is used to convert an array to its individual elements, the rest parameters are used to convert individual elements into an array. Also, the spread operator is used when calling a function, whereas the rest parameters are used in the function parameters.

//template strings

let firsstName = "sakshi";
let lasstName = "Jain";

console.log("My name is " + firsstName + ".\n" + lasstName); //es5

console.log(`My name is " + firsstName +
+ lasstName`); //es6 using template string

//destructuing - to break down a complex structure into simple part
// when we want to access only 2 keys from a large object which has many keys

// 2types of destructing

const mobile = ["91", "9999", "8888888"];

const [country, oerator, subscriber] = mobile;

console.log(country);

//if we want only first 2 without lasdt one
const [country1, oerator1] = mobile;

//if we want 1 and 3 i.e not stroed continouly indexes
const [country3, subscriber3] = mobile;

//methd 2 - object destructruing
//extract fname and lname of a ctueomr object

const customer = {
  fname: "sakshi",
  lname: "jain",
  country: "india",
};

//using es5
console.log(customer.fname);

//es6
const { fname, lname } = customer;
console.log(fname);

// This session covered the following topics.

// ECMAScript: It is a trademarked scripting language specification standardized by ECMAScript International. This specification governs the JavaScript language by providing a set of rules and guidelines to which the language must conform.
// JavaScript engine: It interprets and executes JavaScript code in the browser.
// You learned different releases of the ECMAScript specification. You learned about ES2015 (popularly known as ES6), which was released in 2015 and brought about major changes in the JavaScript language.
// We covered Babel, which is the JavaScript compiler that converts code written in ES6 (or later versions) to ES5 code, which most browsers understand.

// In addition, you learned some of the differences between the ES5 and ES6 syntax. Given below are some of the points followed by the new syntax in ES6:

// Declaring variables with two new keywords: let and const. let is used when you want to change the value of a variable in future, whereas const is used when you do not want to change its value. Unlike var, variables declared using the let and const keywords are not hoisted
// Classes, which are syntactic sugar over JavaScript’s existing functions and help achieve what is called prototype-based inheritance in ES5
// Arrow functions, which are a new syntax over traditional functions and are used to write code quickly and more effectively. They also solve some of the problems with regard to the “this” keyword
// Array methods – map(), filter(), and reduce() – which are used to iterate over an array and are a much simpler and quicker way to perform operations on arrays as compared with their alternative methods
// The powerful three dots, which represent the spread operator as well as the rest parameters. It depends upon the context in which you use them. When used as the spread operator, they are used to segregate an array into its individual elements. When used as the rest parameters, they are used to treat the individual arguments passed to a function as a combined array in the function parameters
// Template literals, which are a better way of concatenating string literals
// Ways to destructure an array or object to extract its individual elements or keys
// import and export keywords, which are used to import and export the modules (including variables, functions, and classes) defined in one file to be used in another file in order to maintain code reusability and reduce redundancy
