const numbers= [2,42, 5, 304,1, 13];
// Spread Operator
// const numberCopy= [...numbers];
// Slice Operator 
const numberCopy= numbers.slice();


// console.log(numberCopy);

// If clone array when have a Object

const objectOriginal= [{name: 'Sadie', age: 12},{name: 'Patrick', age:18}];
// Use spread operator
// const objectCopy =[...objectOriginal];
// Used map()
const objectCopy= objectOriginal.map( element => ({element}));

// Change object in objectCopy
objectCopy[0].age=14;

console.log(objectOriginal[0].age);


