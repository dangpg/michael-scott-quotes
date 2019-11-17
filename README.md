# Michael Scott Quotes

[![screenshot](screenshot.jpg)](https://michael-scott-quote.herokuapp.com)

Simple nodeJS application that serves Michael Scott quotes through an HTTP endpoint. Bundled with a static webpage for demonstration purposes. Uses [Express](https://expressjs.com/) under the hood.

Visit https://michael-scott-quote.herokuapp.com for a demo.

## HTTP Endpoints

API reachable under https://michael-scott-quote.herokuapp.com:3000/

|Route|Description|
|-----------|-------------|
|`GET /v1/count`|Returns the number of all available quotes as text string|
|`GET /v1/quotes/{id}`|Returns quote at index number {id} as text string|
|`GET /v1/quotes/all`|Returns all quotes as JSON array|
|`GET /v1/random`|Returns a single randomly chosen quote as text string|
|`GET /random/{num}`|Returns {num} randomly chosen quotes as JSON array. Returns all quotes if {num} exceeds the total count|

Also comes with a respective Swagger UI: https://michael-scott-quote.herokuapp.com:3000/v1/swagger/

## Acknowledgment
Inspiration taken from the [Ron Swanson quotes API](https://github.com/jamesseanwright/ron-swanson-quotes) - all credits to James Wright.