const stateValues = [459, 144, 96, 34, 0 ,14];
// const [arizona, missouri, idaho, nebraska, texas, minnesota] = stateValues;
// const [arizona, missouri, ,,, minnesota] = stateValues;
const [arizona, missouri,...others] = stateValues;
console.log(others);