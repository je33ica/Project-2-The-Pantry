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

barChartIt();

let dateKeys = [];
let dateValues =[];
let todaysDate;
let todaysDateValue;

async function barChartIt() {
  await getDataTwo();
  console.log(dateKeys);
  new Chart(document.getElementById("bar-chart"), {
    type: "bar",
    data: {
      labels: [todaysDate + " (today)", ...dateKeys],
      datasets: [
        {
          label: "No. of items for each expiry date",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850",
          ],
          data: [0, ...dateValues],
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "Number of Items by Expiry Date",
      },
    },
  });
}

const datesArray = [];
async function getDataTwo() {
  let myFetch = await fetch("http://localhost:3000/api/foods");
  const data = await myFetch.json();
  console.log(data);

  for (var i = 0; i < data.length; i++) {
    datesArray.push(data[i].expiration);
  }
  var occurrences = {};
  const array = [];

  for (var i = 0, j = datesArray.length; i < j; i++) {
    occurrences[datesArray[i]] = (occurrences[datesArray[i]] || 0) + 1;
  }

  console.log(occurrences)
  const objectArray = Object.entries(occurrences).sort();

  objectArray.forEach(([key, value]) => {
    console.log(key); 
    dateKeys.push(key)
    dateValues.push(value)
    console.log(value); 
  });

  todaysDate = moment().format('YYYY-MM-DD');
  // dateKeys = Object.keys(occurrences).sort();
  // console.log(dateKeys);
  // dateValues = Object.values(occurrences);

}



