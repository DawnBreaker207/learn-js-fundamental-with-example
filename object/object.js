// Object Literal
const person = {
  // Object as object properties
  // name: ["Bob", "Smith"],
  name: {
    first: "Bob",
    last: "Smith",
  },
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}`);
  },
};

function logProperty(propertyName) {
  console.log(person[propertyName]);
}
// Dot notation
person.age;
person.bio();

// Object Chain
person.name.first;
person.name.last;

// Bracket notation

// Associative arrays
person["age"];
person["name"]["first"];

// Setting object members
person.age= 45; 
person["name"]["last"]="Cratchit";

person["eye"]="hazel";
person.farewell= function(){
    console.log("Bye everybody!");
};

const person1 = {
    name: "Chris",
    introduceSelf(){
        console.log(`Hi! I'm ${this.name}.`);
    },
};

const person2 = {
    name: "Deepti",
    introduceSelf(){
        console.log(`Hi! I'm ${this.name}.`);
    }
}

