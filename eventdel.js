// event delegation

// jab aap event listener se kai saare different elements ke events ko handle kar sake 

// event listener ko parent par lagao and unko id, class ya fir tag ke basis par differentiate karke different taask karao  

document.querySelector("#parent")
.addEventListener("click", function(e) {
    if(e.target.id === "play") console.log("play the song")
    else if(e.target.id === "stop") console.log("stop the song")
})