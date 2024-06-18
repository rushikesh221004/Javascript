// Async / Await

// koi bhi function banaalo and uske andar jo man mein aaye wo async code likhdo, ab jab aap async likhte ho to baad wali line pahle chal jaati hai kyuki async side stack pe hota hai aur baad waali line agar async ke basis par hui to aapka code fail ho jaayega, wo isliye kyuki aapka code depend karta  hai async code par jo ki baad mein chalega sync code chalne ke baad.
// Create any function and write whatever comes to your mind inside it in async code. Now when you write async, the later line runs first because async is on the side stack and if the later line is run on the basis of async then Your code will fail because your code depends on the async code which will run later after the sync code runs.

async function data() {
    let userData = await axios.get('https://randomuser.me/api/')
    console.log(userData["data"]["results"])
}