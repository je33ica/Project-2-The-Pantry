chartIt();
let dryArray = [];
let perishableArray = [];
let frozenArray = [];

async function chartIt() {
  await getData();
  console.log(dryArray);
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
  // https://pantrycheck.herokuapp.com/

  let myFetch = await fetch("/api/foods");
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

barChartIt();

let dateKeys = [];
let dateValues = [];
let colourArray2 = []
let todaysDateKey;
let todaysDateValue;

async function barChartIt() {
  await getDataTwo();
  console.log(colourArray2)
  const barChart = new Chart(document.getElementById("bar-chart"), {
    type: "bar",
    data: {
      labels: [...dateKeys],
      datasets: [
        {
          label: "No. of items for each expiry date",
          backgroundColor: [...colourArray2],
          data: [...dateValues],
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "Number of Items by Expiry Date",
      },
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
    },
  });
}

const datesArray = [];
async function getDataTwo() {
  let myFetch = await fetch("/api/foods");
  const data = await myFetch.json();
  console.log(data);

  for (var i = 0; i < data.length; i++) {
    datesArray.push(data[i].expiration);
  }
  var occurrences = {};

  for (var i = 0, j = datesArray.length; i < j; i++) {
    occurrences[datesArray[i]] = (occurrences[datesArray[i]] || 0) + 1;
  }

  console.log(occurrences)
  const objectArray = Object.entries(occurrences).sort();
  todaysDate = moment().format('YYYY-MM-DD');

  objectArray.forEach(([key, value]) => {
    console.log(key); 
    dateKeys.push(key)
    dateValues.push(value)
    console.log(value); 

    if(key < moment().format("YYYY-MM-DD")){
      colourArray2.unshift("#A52A2A")
    }
    else{
      colourArray2.push("#4AD395")
    }
    console.log(colourArray2)
  });
}




