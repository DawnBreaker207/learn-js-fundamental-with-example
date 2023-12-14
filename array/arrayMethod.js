const arr1 = [1, 3, 34, 56, 56, 65];
const arr2 = [5, 7, 346, 453, 967, 104];

// Lenght
let length = arr1.length;

// To String
let string = arr1.toString();
// Push
let add = arr1.push(
  3,
  "hello",
  () => {
    console.log("lmao");
  },
  (object = {
    name: 4,
    class: "black",
  })
);
let push = arr1.push('hello', "Hello", 56);

// Pop
let pop = arr1.pop();

// Splice
let splice= arr1.splice("Hello","OK");

// Slice
let Slice= arr1.slice(5);
// Concat
let concat = arr1.concat(arr2);

// Shift
let shift = arr1.shift();
// UnShift
let UnShift = arr1.unshift("65");

// Reverse
let reverse = arr1.reverse();

// console.log
// console.log(length);
// console.log(string);
// console.log(pop);
// console.log(push);
// console.log(splice);
console.log(Slice);
// console.log(shift);
// console.log(UnShift);
// console.log(concat);
// console.log(reverse);
