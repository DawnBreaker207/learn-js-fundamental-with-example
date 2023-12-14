const events = [2, 4, 6, 8];
const odds = [1, 3, 5, 7, 9];

// Concat method
// const eventsOdds= events.concat(odds);
// Spread Operator
// const eventsOdds= [...events, ...odds];
const eventsOdds = [54, ...events, 2, ...odds, 5, 6];

// console.log(eventsOdds);

// Merge with object in array

const dates2020 = [new Date(2020, 1, 10), new Date(2020, 2, 10)];
const dates2021 = [new Date(2021, 1, 10), new Date(2021, 2, 10)];

const datesCombined = [...dates2020, ...dates2021];
datesCombined[0].setYear(2022);

console.log(dates2020[0]);
