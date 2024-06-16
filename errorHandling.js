// error handling

// try catch

function trCatc(a, b) {
    try {
        if(a==0) throw Error("a value is 0");
        console.log(a+b)
    } catch(err) {
            console.error(err)
    }
}

trCatc(0, 5)