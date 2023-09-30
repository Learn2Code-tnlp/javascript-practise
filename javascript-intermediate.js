// pass by value
function foo(x) {
  console.log(x);
  x = "sakshi1";
  console.log(x);
}

var name = "sakshi";

foo(name);
console.log(name); // will print sakshi and NOT sakshi1 because x is passed by value

// pass by refeerence

function changeName(person) {
  console.log(person.name);
  person.name = "Swati gupta";
  console.log(person);
}

var person = {
  name: "Swati",
};

changeName(person);
console.log(person); // will print "Swati gupta" and NOT "swati"" because x is passed by reference which means the pointer to the memory location is passed and not the value of the object

// ALL PRIMITIVE TYPES ARE PASS-BY-VALUE
// ALL OBJECTS and arrays ARE PASSED -BY-REFERENCE

//----------------------------------------------------------------------------------------------------------------------
//function prototypes in javascript

//-------------------------every obj or a variable has a property called "prototype"
a = 1;
console.log(a.__proto__); //prototype of a - prints number

obj = new Object();
console.log(obj.__proto__); //prototype of an object - prints xxx

//------------------PRTOTYPAL INHERITANCE-------------------------
let animal = {
  moves: true,
};
console.log(animal.__proto__); //prototype of an object - prints xxx

let rabbit = {
  eats: true,
};
console.log(rabbit.__proto__); //prototype of an object - prints xxx

//set rabbit protoype to animal
rabbit.__proto__ = animal; // rabbit extsnds from animal object

console.log(rabbit.eats); // prints true
console.log(rabbit.moves); // prints true - check the prooperty "moves" in its own ibj definition and it didnot find it. but we have set the  protoype as animal so becz of prototypal inheritance now, it checks parent def and finds the prop "moves" , so returns true
console.log(rabbit.drinks); //returns undefined as it doesnf ind the prop on parent also

//-------------------------SCOPE of a variable
// local scope - inside a function
// lifetime of a variable starts from the time the varfiable is declared.
// if the v is inside a function, then its lifetime ends when function ends
// if its defined globally, then its lifetimeends when browser window is closed
// globalscope - outside a function, and everything inside the browser window
// scope chain works from inward to outward
// this means that a variable is looked for inside the local scope first.
// if the local scope doesnt contain the variable to be searched for , then the control goes to gloabl scope to see if the variables id defined globally. if not its conidered undefined

//--------------lexical scoping
function foo() {
  var x = 20;
  bar();

  function bar() {
    console.log(x);
  }
}

console.log(foo()); // prints 20 as bar didnt find x inside it so it went up to parent foo and then found it

function fun1() {
  var x = 20;
  fun2();

  function fun2() {
    var y = 20;
    //  / console.log(z);
    fun3();

    function fun3() {
      var z = 30;
      console.log(x, y, z); //prints 10 20 30 becpz of parent scoping chain
    }
  }
}

console.log(fun1()); // gives z is not defined becoz it searched fun2, z is not found, then went to fun1-> not found and then searched in window/gloabl scope-> not found so returned undefined

//----------------------CLOSURES-------------------------------------------------------
//  a function has a return statement, which is used to return some value from the function. But what if the return statement returns some other function?

function greet(name) {
  var greeting = "Hi" + name;
  return function () {
    console.log(greeting);
  };
}

sayHello = greet("Sakshi");
console.log(sayHello());

// Suppose you mock the functionality of adding an item to the cart. A simplified code can be considered, similar to the one given below.

function modifyItem() {
  var items = 0;

  return {
    add: function () {
      console.log("Added item to cart!");
      items++;
    },

    getCount: function () {
      return "Items in cart = " + items;
    },
  };
}

var item = modifyItem();

item.add();
console.log(item.getCount()); // prints 1

item.add();
item.add();
console.log(item.getCount()); // prints 3

// Here, the function modifyItem() modifies an item inside the cart. It returns an object consisting of two keys, add and getCount, which contain methods to add an item to the cart and to get the count of the total number of items in the cart, respectively.

// The value returned by the function modifyItem(), which is an object, is held inside the variable item. On this variable item, the getCount() method is called. Notice that the methods add() and getCount() are accessible even after the modifyItem() statement is executed. This means that these are accessible even after the modifyItem() function has finished executing.

// Thus, you can use the closure function [closure methods add() and getCount()] even when the outer function [function modifyItem()] in which it was defined has finished its execution. And, you can still access the resource(s) (items) defined inside the scope of the outer function, in which the closure was created.

//HOISTING
// Well, all the variables that are declared in your code are moved to the top and remembered by the compiler. This is how when you run the code, all the variables are accessible even though it seems like the variables have not been declared yet. Remember that all these variables are initialized with the value "undefined". And, this is why if you try to access a variable without initializing it, you get the value "undefined".

// So far, you have learned what happens when variables are hoisted in JavaScript. Now, let's discuss what happens when functions are hoisted in JavaScript.

// Let's take a look at an example.

function add(x, y) {
  console.log(x + y);
}

add(1, 2);

// Well, it is obvious that the output of this code will be 3, which is the sum of 1 and 2.

// Here is the output for the example above.

// 3

// Now, let's see what happens if you move the invoke statement before function declaration, as shown below.

add(1, 2);

function add(x, y) {
  console.log(x + y);
}

// Notice that here, you are calling a function before even declaring and defining it. What do you think will be the output of this code?

// Here is the output for the code above.

// 3

// Well, it is 3 again. This is because similar to variable declarations, JavaScript hoists function declarations to the top of the code. Thus, you can call any function that has been declared later. We would not recommend you to do that, but of course, this is possible.

// Now, let's take a look at another example.

var add;
add(1, 2);

// Notice that the variable "add" is not declared as a function anywhere. What do you think will happen when you run this code?

// Here is the output for the code above.

// Uncaught TypeError: add is not a function

// As you can guess, the code will throw a type error saying "add is not a function". This is because the variable "add" contains the default value "undefined", and an undefined value cannot be considered as a function.

// Now that you have learned about hoisting, let's take look at another example. What do you think will be the output of the following code snippet?

add(1, 2);

var add = function (x, y) {
  console.log(x + y);
};

// Do you think it will print 3?

// Here is the output for the code above.

// Uncaught TypeError: add is not a function

// The code will throw a type error saying "add is not a function". This is because "add" is a variable here, and you are assigning a function to this variable. As you learned earlier, in JavaScript, variables are hoisted to the top. Thus, this code will be transformed as the one given below.

var add;

add(1, 2);

add = function (x, y) {
  console.log(x + y);
};

// As you can see, this is quite similar to the one we saw in the previous example where a variable is declared and initialized to "undefined", and then, that variable is treated as a function, and thus, an error is thrown.

// So, now that you have learned about hoisting, how can you prevent it? Well, you can do so by declaring all your variables at the top of the scope where they are needed to be referenced. Also, you should try to initialize the variables that will not change their values in the future so as to prevent their undefined behavior.

//---------------------------------------this keyword-------------------------------------

// var person = {
//   firrstName: "Sakshi",
//   get: function () {
//     console.log("outer: " + this.firrstName);
//     var print = function () {
//       console.log("inner: " + this.firrstName); // here we cannot access person obj with this keyword inside the inner function of get method
//     };
//     print();
//   },
// };

// console.log(person.get());

// a function inside a method is actually a regular function call, and the "this" keyword points to the global window object inside such a function.

//----------------------------------bind-----------------------------------

//In this segment, you will learn about one of the problems associated with the "this" keyword.The problem is that the "this" keyword points to the global object inside a function call defined inside a method, rather than pointing to the object inside which the function (regular function) is defined.Let's watch the next video to understand how to handle this problem.
//  you learned how to make the "this" keyword point to the object inside a function that is defined inside a method of the object. You can do this by assigning the context "this" to another variable inside the method and then accessing this variable inside the function defined in the method.

// However, there is a better solution to this problem

var person = {
  firrstName: "Sakshi",
  get: function () {
    var that = this;
    console.log("outer: " + this.firrstName);
    var print = function () {
      console.log("inner: " + that.firrstName); // IT PRINTS WOAHHH
    };
    print();
  },
};

console.log(person.get());

// using bind
var person = {
  firrstName: "Sakshi",
  get: function () {
    console.log("outer: " + this.firrstName);
    var print = function () {
      console.log("inner: " + this.firrstName); // IT PRINTS WOAHHH
    }.bind(this);
    print();
  },
};

console.log(person.get());

// any scope can be passed to the bind function and the passed scope is what the this keyword inside the function will refer to
//example -  passing window scope now

window.firrstName = "John";

window.lastName = "Doe";
var person = {
  firrstName: "Sakshi",
  lastname: "Jain",
  get: function () {
    console.log("outer: " + this.firrstName);
    var print = function () {
      console.log("inner: " + this.firrstName); // IT PRINTS WOAHHH
    }.bind(window);
    print();
  },
};

console.log(person.get());

// using bind to pass args to a function
var person = {
  name1: "Sakshi",
  name2: "Jain",
  get: function () {
    console.log("outer1: " + this.name1);
    var print = function (role) {
      console.log("inner1: " + this.name1 + "i am a role" + role); // IT PRINTS WOAHHH
    }.bind(this, "Developer");
    print();
  },
};

console.log(person.get());

//-------------------------------- CALL AND APPLY METHOD
var person = {
  name1: "Sakshi",
  name2: "Jain",
  get: function () {
    console.log("outer1: " + this.name1);
    var print = function (role, type) {
      console.log("inner1: " + this.name1 + "i am a role" + role + type); // IT PRINTS WOAHHH
    }.call(this, "Developer", "Java");
    // print();
  },
};

console.log(person.get());

var person = {
  name1: "Sakshi",
  name2: "Jain",
  get: function () {
    console.log("outer1: " + this.name1);
    var print = function (role, type) {
      console.log("inner1: " + this.name1 + "i am a role" + role + type); // IT PRINTS WOAHHH
    }.apply(this, ["Developer", "Java"]);
    // print();
  },
};

console.log(person.get());

// There are two ways in which variables can be passed, by value and by reference. All variables of primitive type are passed by value, and all variables of non-primitive type are passed by reference.
// The __proto__ property of a variable refers either to an object or to null. Remember that you can implement inheritance in JavaScript by assigning the prototype of an object to another object.
// There are two types of scope in JavaScript:

// Local scope: Anything inside a function is in its local scope.

// Global scope: Anything not inside a function is in its global scope.

// A closure is an inner function that has access to the outer (enclosing) function’s resources due to the scope chain where a child can access all the resources of its parent.

// All the variables that are declared in your code are moved to the top and remembered by the compiler. This concept is known as hoisting.

// The popular "this" keyword points to the global window object in the context of browsers when written inside a regular function call. However, in the case of a method, which is defined as a function inside an object, the ‘this’ keyword points to the object to which the method is bound.

// The bind(), call() and apply() methods are used to bind a function while passing the desired scope to the inner function. This is also useful in solving the problem of the "this" keyword pointing to the global object inside a function in an object.
