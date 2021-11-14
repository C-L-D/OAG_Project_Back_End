BACK END 
express generator to create schema of project
create dabatase on heroku and get credentials

//create database plan //
columns to include in the OAG database *(tableName=Flights)*( id SERIAL PRIMARY KEY, Flight # INT , Arrival Time INT , Departure Time INT , Number of days INT , Arrival Airport TEXT , Departure Airport TEXT , Terminal INTEGER)
for the fake data database create a JS file as an array of objects to contain (activity, location, supplier)
export the fake data file and populate table with columns *(tableName=Activities)* (id SERIAL PRIMARY KEY, activity TEXT, supplier TEXT)

// Create .env file and add to .gitignore ✅

    //Update the index.js Pool file with process.env.PGUSER ✅

//create DB folder ✅
    // Within DB folder create Scripts folder ✅
        //createFlightsTable.js ✅
        //populateFlightsTable.js ✅
        //dropFlightsTable.js ✅
        //updateFlightsTable.js
        //createActivitiesTable.js
        //populateActivitiesTable.js
        //dropActivitiesTable.js
update package.json with scripts (create,drop,populate)

//ROUTES FOLDER//
require express
const Router = express.Router();
const {all models go here} = require(./fileName)
// router.get requests to get all data within Heroku database ( within an async function)
// const {flightId} = req.params (destructure the param )
const data = await function in models()
//return res.json ( success:true, message: "here's your data" payload)
//

//Models Folder//
require the {query}
create an Async function getTwoFlights(Flight1,Flight2)
*Possible roadblock 2 queries within 1 function, might have to make 2 separate queries instead*
const data = await query
query database ( SELECT FlightId from Flights)
return data.rows

//Create JS file for fetching the API(OAG)//
  install node fetch
  write an async function getFlights
  await result
  await res.json
  console.log(data)