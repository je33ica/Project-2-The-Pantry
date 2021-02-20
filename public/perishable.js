// fetch("/api/perishable", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   response,
// })
//   .then((response) => {
//     console.log("response in perishable.js", response);
//     location.reload();
//   })
//   .catch((err) => console.log(err));

function getData() {
  let myFetch = fetch("http://localhost:3000/api/foods");

  myFetch.then(function(response) {
    response.json().then(function(text) {
      console.log(text);
    });
  });
}
