const { query } = require("../index");

async function createFlightsTable() {
  const data = await query(
    "CREATE TABLE flights (id SERIAL PRIMARY KEY, location TEXT, flight1Number INT, flight2Number INT, layoverIntervalTime DECIMAL);"
  );
  console.log("Flights data has been created");
  return data;
}

createFlightsTable();
