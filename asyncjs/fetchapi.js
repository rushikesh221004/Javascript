// Fetch API

// ye kisi aur url(API) par jaa kar data layega ya data hamaare paas se us url(API) par lekar jaayega.
// It will fetch data by going to some other url(api) or will take the data from us to that url(api).

// kyuki yeh internet par jaayega phir data ko lekar aayega to ismein time lagta hai to by default hi js mein fetch ko async banaayaa gayaa hai kyuki fetch ka kaam hai data lana wo bhi kisi url se ab aisa ho sakta hai us url ki website slow ho, to data laane mein time lage aur agar fetch synchronous hota to uske baad ka code tab tak nahi chalta jab tak uska data nahi aa jata, which is a big problem.
//Because it will go to the internet and then bring the data, it takes time, so by default the fetch in JS has been made async because the job of fetch is to fetch the data and that too from any URL, now the website of that URL may become slow, then it takes time for the data to arrive and if the fetch is synchronous then the code after that does not even come to the tab until its data arrives, which is a big problem.

fetch(`https://randomuser.me/api/`)
.then((raw) => {
    return raw.json();
})
.then((readable) => {
    console.log(readable.results[0]);
    // You can perform additional operations with 'readable' here if needed
})
.catch((error) => {
    console.error('Error fetching data:', error);
});

fetch(`https://randomuser.me/api/`)
.then((raw1) => {
    return raw1.json();
})
.then((readable1) => {
    console.log(readable1.results[0]);
    // You can perform additional operations with 'readable' here if needed
})
.catch((error) => {
    console.error('Error fetching data:', error);
});

