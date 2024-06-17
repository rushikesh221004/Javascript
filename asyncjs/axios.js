// Axios(or other HTTP libraries)

// ye bhi wahi karega jo fetch karta hai bas ye thoda jyada developer friendly hai.
// This will do the same thing as fetch, only it is a little more developer friendly.

axios.get(`https://randomuser.me/api/`)
.then((res) => {
    console.log(res.data.results[0][`email`])
})
.catch((err) => {
    console.log(err)
})