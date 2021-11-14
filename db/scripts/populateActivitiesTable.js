const { query } = require("../index");

const activitiesData = [
  {
    location: "SIN",
    activity: "Marina Bay Sands",
    supplier: "Mr Sands",
  },
  {
    location: "SIN",
    activity: "Garden by the Bay",
    supplier: "The Bay People",
  },
  {
    location: "SIN",
    activity: "Trampolining in your underpants",
    supplier: "ExtremeTrampoline",
  },
  {
    location: "SIN",
    activity: "Be a Movie Director",
    supplier: "Universal Studios",
  },
  {
    location: "SIN",
    activity: "TruckSimulator",
    supplier: "Truck R Us",
  },
  {
    location: "SIN",
    activity: "Squat session",
    supplier: "School of Code (Singapore Branch)",
  },
];

async function populateActivitiesTable(data) {
  data.forEach(async (item) => {
    const res = await query(
      `INSERT INTO activities (location, activity, supplier) VALUES ($1, $2, $3);`,
      [item.location, item.activity, item.supplier]
    );
    console.log(`populated table with ${res}`);
  });
}

populateActivitiesTable(activitiesData);
