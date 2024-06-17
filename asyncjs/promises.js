// Promises
// promise ke andar jo code likhoge wo apana kaam karega aur ye khud side stack mein chale jayega us code ko lekar aur jab andar se code ko resolve kiya jayega tab ye chalega.
// The code you write inside promise will do its work and it will automatically go to the side stack with that code and when the code is resolved from inside then it will run.

function data() {
  return new Promise((resolve, reject) => {
    axios.get(`https://randomuser.me/api/`).then((res) => {
      if (res["data"]["results"][0]["dob"]["age"] > 50)
        resolve(res["data"]["results"][0]["dob"]["age"]);
      else reject(res["data"]["results"][0]["dob"]["age"]);
    });
  });
}

data()
  .then((response) => {
    console.log("Your eligible for driving, your age is ", response);
  })
  .catch((err) =>
    console.log("Your not eligible for driving, your age is ", err)
  );
