# Goal Diggers Backend API Interface

Welcome to the backend documentation for 'Between Flights', an app to help you find something to do on your long layover between your flights! It contains two tables and acts as a proxy to OAG flights API to avoid CORS issues from the frontend.

## Motivation

This RESTful backend is designed to calculate the time between your flights and then find some activities for you to do in that time near the airport you are in.

Currently, the API consists of two tables: one to store some activities data - activities, and another to store flight layover data - flights. Only GET requests are currently implemented on the frontend app.

POST, PUT, PATCH, and DELETE requests to the activities table are currently intended to be used by admininstrators of the app. Full implementation on the frontend would see companies able to log in to the app and update the activities table with their activities.

PUT, PATCH, and DELETE requests to the flights table are intended for use by administrators only. POST requests to the flights table are intended to be implemented to store registered users' layover data for use again.

## Reflections

- This backend has been a large project to embark on, with multiple issues relating to data transformation. The issues became apparent when we considered the way that users would enter the data on the frontend application.

## License
MIT

## Credits

- Elly Durant
- Filipe Proenca
- Tom Lowen
- Claire Doswell

## Available Routes

### Flights table

#### GET

Get Specific Flight Layover Details

```
https://goaldiggers-backend.herokuapp.com/flights?flight1number=SQ317&flight2number=SQ281&flight1date=2021-10-15&flight2date=2021-10-16
```

```
Request Params
flight1number
SQ317
flight2number
SQ281
flight1date
2021-10-15
flight2date
2021-10-16}
```

#### GET

Get All Flight Layover Details

```
https://goaldiggers-backend.herokuapp.com/flights
```

#### POST

POST a Layover

```
https://goaldiggers-backend.herokuapp.com/flights
```

Bodyraw (json)

json

```
{
"location": "LHR",
"flight1Number": "CA234",
"flight2Number": "YH836",
"layoverIntervalTime": 24
}
```

#### DEL

DELETE a Layover

```
https://goaldiggers-backend.herokuapp.com/flights/2
```

#### PUT

PUT a Layover

```
https://goaldiggers-backend.herokuapp.com/flights/2
```

Bodyraw (json)

json

```
{
"location": "LHR",
"flight1Number": "CA234",
"flight2Number": "YH836",
"layoverIntervalTime": 36
}
```

#### PATCH

PATCH a Layover

```
https://goaldiggers-backend.herokuapp.com/flights/2
```

Bodyraw (json)

json

```
{
"layoverIntervalTime": 155
}
```

### Activities Table

#### GET

Get All Activity Details

```
https://goaldiggers-backend.herokuapp.com/activities
```

#### GET

Get All Activity by Location

```
https://goaldiggers-backend.herokuapp.com/activities?location=SIN
```

```
Request Params
location
SIN
```

#### DEL

DELETE Activity by ID

```
https://goaldiggers-backend.herokuapp.com/activities/8
```

#### POST

POST Activity by ID

```
https://goaldiggers-backend.herokuapp.com/activities
```

Bodyraw (json)

json

```
{
"location": "SIN",
"activity": "Garden by the Bay",
"supplier": "The Bay People"
}
```

#### PUT

PUT Activity

```
https://goaldiggers-backend.herokuapp.com/activities/8
```

Bodyraw (json)

json

```
{
"location": "SIN",
"activity": "Garden by the Bay",
"supplier": "The Bay People"
}
```

#### PATCH

PATCH Activity

```
https://goaldiggers-backend.herokuapp.com/activities/8
```

Bodyraw (json)

json

```
{
"location": "SIN"
}
```
