// global - window
// console.log(this);

//function - window
function abcd() {
  console.log(this);
}
// abcd();

// method - object
let obj = {
  name: function () {
    console.log(this.age);
  },
  age: 19,
  email: "abcd@gmail.com",
};
// obj.name();

// fnc inside method (es5) - window
let obj2 = {
  sayName: function () {
    console.log(this); //Object
    function childfnc() {
      console.log(this); //window
    }
    childfnc();
  },
};
// obj2.sayName();

// fnc inside method (es6) - object
let obj3 = {
  sayName: function () {
    console.log(this); //Object
    let arrfnc = () => {
      console.log(this); //Object
    };
    arrfnc();
  },
  name: "rishi",
};
// obj3.sayName();

// constructor fnc mein this ki value - new blank object
function add() {
    console.log(this)
}

// let ans = new add()

// event listener mein this ki value - that element jispar event lis. laga ho
document.querySelector("button")
.addEventListener("click", function() {
    console.log(this)
})

// ------------------------------------------------------------------call, apply bind----------------------------------------------------------------------------

//call, apply, bind
//These are three ways to call a function considering an object as 'this'.

// call
let obj4 = {
    name: "catolina"
}

function cal() {
    console.log(this)
}

// cal.call(obj4)

// apply 
let obj5 = {
    name: "blacko"
}

function aply(a, b,c) {
    console.log(this, a, b, c)
}

// aply.apply(obj5, [19, "abcd@gmail.com", "9Ae78RubD66"])

// bind

let obj6 = {
    name: "marino"
}

function marino() {
    console.log(this)
}

let afterRunfnc = marino.bind(obj6)
// afterRunfnc()