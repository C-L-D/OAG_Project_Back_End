const { query } = require("../index");

async function dropFlightsTable(){
    const res = await query(`DROP TABLE IF EXISTS flights;`);
    console.log('flights table is deleted!')
    return;
}

dropFlightsTable();