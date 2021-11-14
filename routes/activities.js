const express = require("express");
const router = express.Router();
const {
  getAllActivities,
  getActivitiesByLocation,
  deleteActivityById,
  postNewActivity,
  patchActivity,
  updateActivity,
} = require("../models/activities");

router.get("/", async (req, res) => {
  const { location } = req.query;
  if (location) {
    let data = await getActivitiesByLocation(location);
    res.json({
      success: true,
      message: "Here are all the activities in this location",
      payload: data,
    });
  } else {
    let data = await getAllActivities();
    res.json({
      success: true,
      message: "Here are all the activities",
      payload: data,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  let data = await deleteActivityById(id);
  res.json({
    success: true,
    message: `you have deleted activty ${id}`,
    payload: data,
  });
});

router.post("/", async (req, res) => {
  const { body } = req;
  const data = postNewActivity(body);
  res.json({
    success: true,
    message: `You have added a new activity`,
    payload: data,
  });
});

router.put("/:id", async function (req, res) {
  const { id } = req.params;
  const { body } = req;
  const activities = await updateActivity(id, body);
  res.json({
    success: true,
    message: `You have updated an activity`,
    payload: activities,
  });
});

router.patch("/:id", async (req, res) => {
  //destrcuture id from params
  const { id } = req.params;
  const { body } = req;
  //make an array of acccepatble col headers - if not someone coudl pass in antyning
  const acceptableColHeaders = ["location", "activity", "supplier"];
  // if key is an aceeptable column
  for (const key in body) {
    if (acceptableColHeaders.includes(key)) {
      const value = req.body[key];
      const data = await patchActivity(id, key, value);
      res.json({
        success: true,
        message: `Updated entry number ${id}`,
        payload: data,
      });
    } else {
      res.json({
        success: false,
        message: "Invalid column name supplied",
      });
    }
  }

  // make the patch call with the key, value and id
  // else
  // say you have supplied an incorrect col header
});

module.exports = router;
