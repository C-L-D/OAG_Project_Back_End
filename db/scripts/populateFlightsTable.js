const { query } = require("../index");
const flights = [
  {
    data: [
      {
        carrierCode: {
          iata: "SQ",
          icao: "SIA",
        },
        serviceSuffix: null,
        flightNumber: 317,
        sequenceNumber: 1,
        departure: {
          airport: {
            iata: "LHR",
          },
          terminal: "2",
          passengerLocalTime: "11:25",
        },
        arrival: {
          airport: {
            iata: "SIN",
          },
          terminal: "0",
          passengerLocalTime: "07:30",
        },
        aircraftType: {
          iata: "77W",
        },
        serviceTypeCode: {
          iata: "J",
        },
        arrivalIntervalDays: 1,
        legArrivalIntervalDays: 1,
        effectivePeriod: {
          startDate: "2021-09-13",
          endDate: "2021-10-30",
        },
        segmentInfo: {
          numberOfStops: 0,
          intermediateAirports: {
            iata: [],
          },
        },
        legDaysOfOperation: [
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday",
          "sunday",
        ],
        oagFingerprint:
          "79b5a6a07d689aa821ed8d1ed6397ae299004465ffdbd0e9402cbc772c972a8f",
        codeshare: {
          operatingAirlineDisclosure: null,
          aircraftOwner: null,
          cockpitCrewEmployer: null,
          jointOperationAirlineDesignators: [],
          comments010: [
            {
              code: "AC",
              serviceNumber: "6299",
              suffix: "",
            },
            {
              code: "NZ",
              serviceNumber: "3317",
              suffix: "",
            },
            {
              code: "SK",
              serviceNumber: "8037",
              suffix: "",
            },
            {
              code: "TP",
              serviceNumber: "8401",
              suffix: "",
            },
            {
              code: "VS",
              serviceNumber: "7972",
              suffix: "",
            },
          ],
          comment050: null,
        },
        bookingClasses: [
          {
            code: "F",
            meal: "M",
          },
          {
            code: "A",
            meal: "M",
          },
          {
            code: "Z",
            meal: "M",
          },
          {
            code: "C",
            meal: "M",
          },
          {
            code: "J",
            meal: "M",
          },
          {
            code: "U",
            meal: "M",
          },
          {
            code: "D",
            meal: "M",
          },
          {
            code: "S",
            meal: "M",
          },
          {
            code: "T",
            meal: "M",
          },
          {
            code: "P",
            meal: "M",
          },
          {
            code: "L",
            meal: "M",
          },
          {
            code: "R",
            meal: "M",
          },
          {
            code: "Y",
            meal: "M",
          },
          {
            code: "B",
            meal: "M",
          },
          {
            code: "E",
            meal: "M",
          },
          {
            code: "M",
            meal: "M",
          },
          {
            code: "H",
            meal: "M",
          },
          {
            code: "W",
            meal: "M",
          },
          {
            code: "Q",
            meal: "M",
          },
          {
            code: "N",
            meal: "M",
          },
          {
            code: "V",
            meal: "M",
          },
          {
            code: "G",
            meal: "M",
          },
          {
            code: "K",
            meal: "M",
          },
        ],
        freightClasses: [],
        restrictions: [],
        planeChangeWithoutAircraftChange: false,
        onTimePerformance: {
          indicator: null,
          delaysAndCancellationsIndicator: null,
        },
        inFlightServices: ["9"],
        automatedCheckIn: null,
        electronicTicketing: true,
        secureFlightIndicator: false,
        governmentApproval: false,
        premiumContent: null,
      },
    ],
    paging: {
      limit: 1,
      totalCount: 1,
      totalPages: 1,
      previous: "",
      next: "",
    },
  },
  {
    data: [
      {
        carrierCode: {
          iata: "SQ",
          icao: "SIA",
        },
        serviceSuffix: null,
        flightNumber: 281,
        sequenceNumber: 1,
        departure: {
          airport: {
            iata: "SIN",
          },
          terminal: "3",
          passengerLocalTime: "08:25",
        },
        arrival: {
          airport: {
            iata: "AKL",
          },
          terminal: "I",
          passengerLocalTime: "23:00",
        },
        aircraftType: {
          iata: "359",
        },
        serviceTypeCode: {
          iata: "J",
        },
        arrivalIntervalDays: 0,
        legArrivalIntervalDays: 0,
        effectivePeriod: {
          startDate: "2021-09-27",
          endDate: "2021-10-30",
        },
        segmentInfo: {
          numberOfStops: 0,
          intermediateAirports: {
            iata: [],
          },
        },
        legDaysOfOperation: ["monday", "tuesday", "friday", "saturday"],
        oagFingerprint:
          "f5b1846d6da86ebbccc9d854f0febb91ad7e1e28d6b11c3bc77241ef2727d08e",
        codeshare: {
          operatingAirlineDisclosure: null,
          aircraftOwner: null,
          cockpitCrewEmployer: null,
          jointOperationAirlineDesignators: [],
          comments010: [
            {
              code: "LH",
              serviceNumber: "9756",
              suffix: "",
            },
            {
              code: "LX",
              serviceNumber: "9006",
              suffix: "",
            },
            {
              code: "NZ",
              serviceNumber: "3281",
              suffix: "",
            },
          ],
          comment050: null,
        },
        bookingClasses: [
          {
            code: "Z",
            meal: "M",
          },
          {
            code: "C",
            meal: "M",
          },
          {
            code: "J",
            meal: "M",
          },
          {
            code: "U",
            meal: "M",
          },
          {
            code: "D",
            meal: "M",
          },
          {
            code: "S",
            meal: "M",
          },
          {
            code: "T",
            meal: "M",
          },
          {
            code: "P",
            meal: "M",
          },
          {
            code: "L",
            meal: "M",
          },
          {
            code: "R",
            meal: "M",
          },
          {
            code: "Y",
            meal: "M",
          },
          {
            code: "B",
            meal: "M",
          },
          {
            code: "E",
            meal: "M",
          },
          {
            code: "M",
            meal: "M",
          },
          {
            code: "H",
            meal: "M",
          },
          {
            code: "W",
            meal: "M",
          },
          {
            code: "Q",
            meal: "M",
          },
          {
            code: "N",
            meal: "M",
          },
          {
            code: "V",
            meal: "M",
          },
          {
            code: "G",
            meal: "M",
          },
          {
            code: "K",
            meal: "M",
          },
        ],
        freightClasses: [],
        restrictions: [],
        planeChangeWithoutAircraftChange: false,
        onTimePerformance: {
          indicator: null,
          delaysAndCancellationsIndicator: null,
        },
        inFlightServices: ["9"],
        automatedCheckIn: null,
        electronicTicketing: true,
        secureFlightIndicator: false,
        governmentApproval: false,
        premiumContent: null,
      },
    ],
    paging: {
      limit: 1,
      totalCount: 1,
      totalPages: 1,
      previous: "",
      next: "",
    },
  },
];

// function layoverTime takes in time 1 and time 2 as strings and layoverIntervalDays
// get the hour and the minute time by using string.split(':')
// get the difference in hours
// get the difference in minutes
// calculate total number of days = ((difference in days * 1440 + difference in hours * 60 + difference in minutes)/1440)
// difference in days * 24 + difference in hours + difference in minutes/60

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

// Get date of flight 1 and flight 2 from front end user input.
let date1 = "2021-10-15";
let date2 = "2021-10-16";
legArrivalIntervalDays = flights[0].data[0].legArrivalIntervalDays;

let location = flights[0].data[0].arrival.airport.iata;
// layover_interval_time of first flight arrival time (some maths) second flight departure time.
let firstFlightArrivalTime = flights[0].data[0].arrival.passengerLocalTime;
let secondFlightDepartureTime = flights[1].data[0].departure.passengerLocalTime;
let flight1Number = flights[0].data[0].flightNumber;
let flight2Number = flights[1].data[0].flightNumber;

let layoverIntervalTime = calculateLayoverTime(
  firstFlightArrivalTime,
  secondFlightDepartureTime,
  date1,
  date2,
  legArrivalIntervalDays
);

async function populateFlightsTable(location, layoverIntervalTime) {
  const res = await query(
    `INSERT INTO flights (location, flight1Number, flight2Number, layoverIntervalTime) VALUES ($1, $2, $3, $4);`,
    [location, flight1Number, flight2Number, layoverIntervalTime]
  );
  console.log(`populated table with ${res}`);
}

populateFlightsTable(location, layoverIntervalTime);
