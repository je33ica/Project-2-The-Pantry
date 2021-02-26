chartIt();
let dryArray = [];
let perishableArray = [];
let frozenArray = [];

async function chartIt() {
  await getData();
  const ctx = document.getElementById("myChart");
  const myDoughnutChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["DRY", "PERISHABLE", "FROZEN"],
      datasets: [
        {
          label: "# of food",
          data: [dryArray.length, perishableArray.length, frozenArray.length],
          backgroundColor: ["#A52A2A", "#4AD395", "#283947"],

          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
}

async function getData() {
  // https://pantrycheck.herokuapp.com/

  let myFetch = await fetch("/api/foods");
  const data = await myFetch.json();

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

barChartIt();

let dateKeys = [];
let dateValues = [];
let colourArray2 = [];
let todaysDateKey;
let todaysDateValue;

async function barChartIt() {
  await getDataTwo();
  //   console.log(colourArray2);
  const barChart = new Chart(document.getElementById("bar-chart"), {
    type: "bar",
    data: {
      labels: [...dateKeys],
      datasets: [
        {
          label: "No. of items for each expiry date",
          backgroundColor: "#4AD395",
          data: [...dateValues],
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "Expiration",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

const datesArray = [];
async function getDataTwo() {
  let myFetch = await fetch("/api/foods");
  const data = await myFetch.json();

  for (var i = 0; i < data.length; i++) {
    datesArray.push(data[i].expiration);
  }
  var occurrences = {};

  for (var i = 0, j = datesArray.length; i < j; i++) {
    occurrences[datesArray[i]] = (occurrences[datesArray[i]] || 0) + 1;
  }

  const objectArray = Object.entries(occurrences).sort();

  objectArray.forEach(([key, value]) => {
    //     console.log(key);
    dateKeys.push(key);
    dateValues.push(value);
    //     console.log(value);
  });
  todaysDate = moment().format("YYYY-MM-DD");
  //   console.log("im today ", todaysDate);

  //   objectArray.forEach(([key, value]) => {
  //     console.log(key);
  //     dateKeys.push(key);
  //     dateValues.push(value);
  //     console.log(value);

  if (key < moment().format("YYYY-MM-DD")) {
    colourArray2.unshift("#A52A2A");
  } else {
    colourArray2.push("#4AD395");
  }
}
