chartIt();

let dryArray = [];
let perishableArray = [];
let frozenArray = [];

async function chartIt() {
  await getData();
  const ctx = document.getElementById("myChart");
  console.log(dryArray.length);
  const myDoughnutChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["DRY", "PERISHABLE", "FROZEN"],
      datasets: [
        {
          label: "# of food",
          data: [dryArray.length, perishableArray.length, frozenArray.length],
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      //cutoutPercentage: 40,
      responsive: false,
    },
  });
}



async function getData() {

  let myFetch = await fetch("http://localhost:3000/api/foods");
  const data = await myFetch.json();
  console.log(data);

  for (var i = 0; i < data.length; i++) {
    const numOfItem = data[i];
    if (numOfItem.storageCondition === "dry") {
      dryArray.push(numOfItem);
    } else if (numOfItem.storageCondition === "perishable") {
      perishableArray.push(numOfItem);
    } else if (numOfItem.storageCondition === "frozen") {
      frozenArray.push(numOfItem);
    }
  }
}



