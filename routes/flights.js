const express = require("express");
const router = express.Router();
const {
  getAllFlightData,
  getLayoverByLocation,
  getSpecificFlightData,
  postNewLayover,
  deleteLayoverById,
  updateLayover,
  patchLayover,
} = require("../models/flights");

// GET request handler
// make a request to the heroku flight table to get all the info
// will call a function getAllFlightData
// which will return the layover time and location
// router will return a res.json with success, message, payload.
// export router
// require router in app

router.get("/", async (req, res) => {
  const { flight1number, flight2number, flight1date, flight2date } = req.query;

  if (flight1number && flight2number && flight1date && flight2date) {
    // ask the database whether those flight numbers are there
    // get the flight number separate from the carried code.
    let flight1CarrierCode = flight1number.match(/^[a-zA-Z]{2}/);
    let flight2CarrierCode = flight2number.match(/^[a-zA-Z]{2}/);
    let flight1Number = flight1number.match(/\d{3,}$/);
    let flight2Number = flight2number.match(/\d{3,}$/);
    console.log(
      flight1CarrierCode[0],
      flight2CarrierCode[0],
      flight1Number[0],
      flight2Number[0],
      flight1date,
      flight2date
    );

    let data = await getSpecificFlightData(
      flight1Number[0],
      flight2Number[0],
      flight1CarrierCode,
      flight2CarrierCode,
      flight1date,
      flight2date
    );
    res.json({
      success: true,
      message: "Here is the flight layover location and time",
      payload: data,
    });
  } else {
    let data = await getAllFlightData();

    res.json({
      success: true,
      message: "Here is all the layover data",
      payload: data,
    });
  }
});

router.post("/", async (req, res) => {
  const data = await postNewLayover(req.body);
  res.json({
    success: true,
    message: "You have posted a layover to the database",
    payload: data,
  });
});

router.put("/:id", async function (req, res) {
  const { id } = req.params;
  const { body } = req;
  const layover = await updateLayover(id, body);
  res.json({
    success: true,
    message: `You have updated a layover`,
    payload: layover,
  });
});

router.patch("/:id", async (req, res) => {
  //destrcuture id from params
  const { id } = req.params;
  const { body } = req;
  //make an array of acccepatble col headers - if not someone coudl pass in antyning
  const acceptableColHeaders = [
    "location",
    "flight1Number",
    "flight2Number",
    "layoverIntervalTime",
  ];
  // if key is an aceeptable column
  for (const key in body) {
    if (acceptableColHeaders.includes(key)) {
      const value = req.body[key];
      const data = await patchLayover(id, key, value);
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

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  let data = await deleteLayoverById(id);
  res.json({
    success: true,
    message: `you have deleted layover ${id}`,
    payload: data,
  });
});

module.exports = router;
