// In here will go all the models for the db requests
const { query } = require("../db/index");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// function taken from populateFlightsTable.js
function calculateLayoverTime(
  time1,
  time2,
  date1,
  date2,
  legArrivalIntervalDays
) {
  let timeArray1 = time1.split(":");
  let timeArray2 = time2.split(":");
  let day1 = date1.split("-"); // expected = [2021, 10, 15]
  let day2 = date2.split("-");
  let dayDifference = day2[2] - day1[2] - legArrivalIntervalDays;

  if (dayDifference < 0) {
    dayDifference = 0;
  }

  let hourDifference = timeArray2[0] - timeArray1[0];
  let minuteDifference = timeArray2[1] - timeArray1[1];
  let layoverTime = dayDifference * 24 + hourDifference + minuteDifference / 60;
  return layoverTime;
}

// function getAllFlightData
// gets all data from table.
// returns data.

async function getAllFlightData() {
  const data = await query("SELECT * FROM flights;");
  return data.rows;
}

// function getSpecificFlightData
// Asks for data from table.
// if not there, calls API to get data
// performs data transformation
// stores in heroku
// brings back data
// returns layover location and time.

async function getSpecificFlightData(
  flight1Number,
  flight2Number,
  IataCarrierCode1,
  IataCarrierCode2,
  DepartureDate1,
  DepartureDate2
) {
  // ask table for data.
  /*const data = await query(
    "SELECT * FROM flights WHERE flight1Number=$1 AND flight2Number=$2;",
    [flight1Number, flight2Number]
  );
  console.log("Asking the table");
  console.log(data);*/
  //if (data.rowCount === 0) {
  // Get request to API
  // fetch the data
  // await the response
  // feed response into the calculate time function, and put the result in the table with the location
  console.log(DepartureDate1, DepartureDate2);
  const resFlight1 = await fetch(
    `https://api.oag.com/flights/?IataCarrierCode=${IataCarrierCode1}&FlightNumber=${flight1Number}&DepartureDate=${DepartureDate1}&Limit=1`,
    {
      headers: {
        "Cache-Control": "no-cache",
        "Subscription-Key": process.env.OAG_API_KEY,
      },
    }
  );
  const resFlight2 = await fetch(
    `https://api.oag.com/flights/?IataCarrierCode=${IataCarrierCode2}&FlightNumber=${flight2Number}&DepartureDate=${DepartureDate2}&Limit=1`,
    {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache",
        "Subscription-Key": process.env.OAG_API_KEY,
      },
    }
  );

  const dataFlight1 = await resFlight1.json();
  const dataFlight2 = await resFlight2.json();
  //console.log(dataFlight1.data[0].arrival, dataFlight2);

  console.log(dataFlight1);
  legArrivalIntervalDays = dataFlight1.data[0].legArrivalIntervalDays;

  let location = dataFlight1.data[0].arrival.airport.iata;
  // layover_interval_time of first flight arrival time (some maths) second flight departure time.
  let firstFlightArrivalTime = dataFlight1.data[0].arrival.passengerLocalTime;
  let secondFlightDepartureTime =
    dataFlight2.data[0].departure.passengerLocalTime;
  console.log(firstFlightArrivalTime, secondFlightDepartureTime);

  let layoverIntervalTime = calculateLayoverTime(
    firstFlightArrivalTime,
    secondFlightDepartureTime,
    DepartureDate1,
    DepartureDate2,
    legArrivalIntervalDays
  );
  console.log(layoverIntervalTime);

  const data = { rows: [location, layoverIntervalTime] };
  /*
  } else {
    continue
  }*/
  return data.rows;
}

async function postNewLayover(layover) {
  const { location, flight1Number, flight2Number, layoverIntervalTime } =
    layover;
  flight1NumberOnly = flight1Number.match(/\d{3,}$/);
  flight2NumberOnly = flight2Number.match(/\d{3,}$/);
  const data = await query(
    "INSERT INTO flights (location ,flight1Number, flight2Number, layoverIntervalTime) VALUES ($1, $2, $3, $4);",
    [location, flight1NumberOnly[0], flight2NumberOnly[0], layoverIntervalTime]
  );
  console.log(`Inserted layover in ${location} into the flights table`);
  console.log(data.rows);
  return data.rows;
}

async function deleteLayoverById(id) {
  const data = await query("DELETE FROM flights WHERE id = $1 RETURNING *;", [
    id,
  ]);
  return data.rows;
}

async function updateLayover(id, body) {
  const { location, flight1Number, flight2Number, layoverIntervalTime } = body;

  let flight1NumberOnly = flight1Number.match(/\d{3,}$/);
  let flight2NumberOnly = flight2Number.match(/\d{3,}$/);
  const data = await query(
    "UPDATE flights SET location=$1, flight1Number=$2, flight2Number=$3, layoverIntervalTime=$4 WHERE id=$5 RETURNING *;",
    [
      location,
      flight1NumberOnly[0],
      flight2NumberOnly[0],
      layoverIntervalTime,
      id,
    ]
  );
  return data.rows;
}

async function patchLayover(id, key, body) {
  console.log(typeof key);
  if (key === "flight1Number") {
    body = flight1Number.match(/\d{3,}$/)[0];
  } else if (key === "flight1Number") {
    body = flight1Number.match(/\d{3,}$/)[0];
  }

  const data = await query(
    `UPDATE flights SET ${key} = $1 WHERE id=$2 RETURNING *;`,
    [body, id]
  );
  return data.rows;
}
async function getLayoverByLocation(location) {
  const data = await query("SELECT * FROM flights WHERE location = $1;", [
    location,
  ]);
  return data.rows;
}

module.exports = {
  getAllFlightData,
  getLayoverByLocation,
  postNewLayover,
  deleteLayoverById,
  updateLayover,
  patchLayover,
  getSpecificFlightData,
};
