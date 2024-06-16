// clousers

// ek function jo return kare doosra function, aur use kare parent function ka koi variable
// A function that returns another function and accesses a variable from its parent function.

function abcd() {
    let a = 10;
    return function() {
        console.log(a)
    }
}

let fnc = abcd()
fnc()