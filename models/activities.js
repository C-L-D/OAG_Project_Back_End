const { query } = require("../db/index");

async function getAllActivities() {
  const data = await query("SELECT * FROM activities");
  return data.rows;
}

async function getActivitiesByLocation(location) {
  const data = await query("SELECT * FROM activities WHERE location = $1;", [
    location,
  ]);
  return data.rows;
}

async function deleteActivityById(id) {
  const data = await query(
    "DELETE FROM activities WHERE id = $1 RETURNING *;",
    [id]
  );
  return data.rows;
}

async function postNewActivity(activityBody) {
  const { location, activity, supplier } = activityBody;
  const data = await query(
    "INSERT INTO activities (location, activity, supplier) VALUES ($1,$2,$3) RETURNING *;",
    [location, activity, supplier]
  );
  return data.rows;
}

async function updateActivity(id, body) {
  const { location, activity, supplier } = body;
  const data = await query(
    "UPDATE activities SET location=$1, activity=$2, supplier=$3 WHERE id=$4 RETURNING *;",
    [location, activity, supplier, id]
  );
  return data.rows;
}

async function patchActivity(id, key, body) {
  const data = await query(
    `UPDATE activities SET ${key} = $1 WHERE id=$2 RETURNING *;`,
    [body, id]
  );
  return data.rows;
}

module.exports = {
  getAllActivities,
  getActivitiesByLocation,
  deleteActivityById,
  postNewActivity,
  updateActivity,
  patchActivity,
};
