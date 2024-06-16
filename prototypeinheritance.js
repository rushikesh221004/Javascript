// Prototypal Inheritance

// hum objects create karte hai and kisi ek parent constructor function ke prototype mein kuchh add kr dete hai and jab bhi add hota hai to wo parent se banne waale sabhi children instances ko wo properties jo parent ko prototype mein di gayi thi wo milti hai saugaat mein.
// "We create objects and add something to the prototype of a parent constructor function. Whenever something is added, all instances of children created from that parent inherit those properties gifted in the parent's prototype."

// ek function jo ki this ka upyog kar raha ho and new ke dwaara naye naye objects bana kar deta ho aise function ko constructor function kahte hai.
//"A function that uses `this` and creates new objects using `new` is called a constructor function."
function makeHuman(name, age) {
    this.name = name
    this.age = age
}

// aisa koi bhi function jismein aap this ka upyog kar rhe ho aur us function ko call karte waqt aap new ka upyog karein, to new ka matlab waha par ek blank object ho jaata hai.
// "If you use `this` in any function and invoke that function using `new`, it means that a blank object is created there."

// let human1 = new makeHuman("francisa", 19)

// Example 1: 
function makeHuman2(name, age) {
    this.name = name
    this.age = age
    this.myName = function() {
        console.log(this.name)
    }
}


let human1 = new makeHuman2("clanocia", 26)
let human2 = new makeHuman2("florida", 15)
// - Each instance (`human1` and `human2`) created using `new makeHuman2()` gets its own copy of the `myName` method.
// - This approach increases memory usage because every object created with `new makeHuman2()` will have its own instance of the `myName` function.


// Example 2:
function makeHuman3(name, age) {
    this.name = name
    this.age = age
}

makeHuman3.prototype.myName = function() {
    console.log(this.name)
}

let human3 = new makeHuman2("clanocia", 26)
let human4 = new makeHuman2("florida", 15)
// - The `myName` method is defined on the prototype of `makeHuman3` (`makeHuman3.prototype.myName`), rather than as a property of each individual instance.
// - This means that all instances created with `new makeHuman3()` share a single instance of the `myName` method, saving memory because the method is not duplicated for each instance.

// Why Example 2 is Better:
// 1. Memory Efficiency: Example 2 uses prototype-based inheritance, which is more memory efficient because shared methods are stored in the prototype chain rather than being duplicated for each object instance.

// Performance: Accessing methods through the prototype chain in Example 2 can be faster because JavaScript engines optimize prototype lookups.

// Code Organization: Example 2 separates the data (properties like `name` and `age`) from the methods (like `myName`), promoting cleaner code organization and adhering more closely to the principles of object-oriented programming.
