// Callbacks

// In JavaScript, callbacks are functions that are passed as arguments to other functions. These functions are intended to be called back at a later point in time, usually after an asynchronous operation has completed or some condition is met. Callbacks are a fundamental concept in JavaScript, especially in handling asynchronous tasks where operations might not complete immediately.

function data(api, callback) {
  axios
    .get(api)
    .then((res) => callback(res.data.results[0]))
    .catch((err) => callback(err));
}

data("https://randomuser.me/api/", (response) => {
  // console.log(response)
  let userData = [
    `Description: ${response.location.timezone.description}`,
    `Fullname: ${response.name.title} ${response.name.first} ${response.name.last}`,
    `Date of birth: ${response.dob.date}`,
    `Age: ${response.dob.age}`,
    `Gender: ${response.gender}`,
    `Country: ${response.location.country}`,
    `State: ${response.location.state}`,
    `City: ${response.location.city}`,
    `Postcode: ${response.location.postcode}`,
    `Phone Number: ${response.phone}`,
    `Username: ${response.login.username}`,
    `Email: ${response.email}`,
    `Password: ${response.login.password}`,
    `Id: ${response.login.uuid}`,
  ];
  userData.forEach((data) => {
    console.log(data)
  })
});
