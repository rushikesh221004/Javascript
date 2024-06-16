// higher order functions

// aisa koi function jo ki ek function ko parameter mein accept karle and/or ek function ko return karde
// Any function that accepts a function as parameters and/or returns a function.

function highOrdFnc(fnc) { // this is a higher order function
    fnc()
}

function childFnc() {
    console.log("My parent name is highOrdFnc")
}

// highOrdFnc(childFnc)

function retFnc() {
    let arr = [1, 2, 3]
    let sum = 0
    arr.forEach(function(elem) {
        sum += elem
    })
    return function() {
        console.log(sum)
    }
}
let innFunc = retFnc()
innFunc()
