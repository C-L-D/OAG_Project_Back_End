const { query } = require("../index");

async function dropActivitiesTable() {
  const res = await query(`DROP TABLE IF EXISTS activities;`);
  console.log("activities table is deleted!");
  return;
}

dropActivitiesTable();
