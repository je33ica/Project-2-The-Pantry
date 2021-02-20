
function getData() {
  let myFetch = fetch("http://localhost:3000/api/foods");

  myFetch.then(function(response) {
    response.json().then(function(text) {
      console.log(text);
    });
  });
}
