# cofin
[cofin](https://cofin.herokuapp.com/) is an equities viewer built on Node.js, Express, MongoDB, React, and D3. 

## Features/Implementation
### Equities Viewer
The equities viewer is a React Component serving the Quandl EOD Wiki API, with a store managed by a Redux-like store. The user can enter a ticker and it will be added to a list of tickers in the UI below, as well as plotted on the D3 graph if it is a valid ticker.

![Equities Viewer View](/screenshots/equitiesViewer.png)

### Redux
The Redux store was implemented using the basic dispatch/subscribe/getStore pattern, using action creators and couriers for async actions. State mutation is avoided using the Object.assign() method. A single reducer is used to manage a single property of the store, and a combine reducers function is passed into the dispatch method, used to map reducers to their properties.

## Coverage
The application currently has 68% code coverage, primarily through unit tests. Missing coverage is largely due to low support on svg based testing in node, which is the primary function of the application. 

## Future Direction
The eventual goal of this application is to allow users to easily access free financial information, specifically financial statistics and models. I am currently working on a tensorflow clone in javascript, and plan to utilize that to build a database of valuable financial statistics for this application.