"use strict";
// Constructor function and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function(){
  //     console.log(2039- this.birthYear)
  // }
};

const a = new Person("A", 2004);

// 1. New {} is created
// 2. function is called, this ={}
// 3. {} linked to prototype
// 4. function automactically return {}

const mason = new Person("CAC", 2913);
const linda = new Person("CAC", 2913);
const david = new Person("CAC", 2913);
const malina = new Person("CAC", 2913);

// console.log(a,malina,mason,david,linda)

// console.log(a instanceof Person)

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
Person.hey = function () {
  console.log("bruh");
  console.log(this);
};
Person.hey();

a.calcAge();

// Each object has a special property: __proto__
// This is simple a prototype
// console.log(a.__proto__);
// console.log(a.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(a));
// console.log(Person.prototype.isPrototypeOf(mason));
// console.log(Person.prototype.isPrototypeOf(Person));

// think prototype property as prototypeOfLinkedObject

Person.prototype.species = "Lmao";
// console.log(a.species);

// console.log(a.hasOwnProperty("firstName"));
// console.log(a.hasOwnProperty("species"));

// Prototypal Inheritance on built-in objects
// console.log(a.__proto__);
// Object.prototype (top of prototype chain)
// console.log(a.__proto__.__proto__);
// console.log(a.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5, 6]; //New Array === []
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique());

// Classes
// Class expresstions
// const PersonCl = class{}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //   Instance methods
  // This outside of constructor will be on the prototype of the objects
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hello, ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert("bruh");
  }
  //   Set a property that already exists
  get fullName() {
    return this._fullName;
  }
  // Static method
  static hey() {
    console.log("lmao");
  }
}

const jess = new PersonCl("Jess Bruh", 1343);
console.log(jess);
// jess.calcAge();
// console.log(jess.__proto__ === PersonCl.prototype);
console.log(jess.age);
PersonCl.hey();
PersonCl.prototype.greet = function () {
  console.log(`Hello, ${this.firstName}`);
};

// jess.greet();
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

// Getter and Setter
const walter = new PersonCl("walter bruh", 1965);

const account = {
  owner: "jonas",
  movement: [200, 530, 120, 300],

  get latest() {
    return this.movement.slice(-1).pop();
  },
  set latest(mov) {
    this.movement.push(mov);
  },
};

// console.log(account.latest);
account.latest = 50;
// console.log(account.movement);

// Obejct.create()

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2043;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1999);
sarah.calcAge();

// Interitance between 'classes': constructor functions

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Liking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
console.log(mike);
mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.dir(Student.prototype.constructor);

// Inheritance between 'classes' : classes

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happend first
    super(fullName, birthYear);
    // this.course = course;
  }
  introduce() {
    console.log(`Name ${this.fullName}, study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2013 - this.birthYear}`);
  }
}

// const martha= new StudentCl('Martha Lmao', 1204);
const martha = new StudentCl("Martha Lmao", 1204, "Computer Science");
martha.calcAge();
martha.introduce();

// Object.create()

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`Name ${this.firstName} studey ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.introduce();
jay.calcAge();

// Class example
// Public field
// Private field
// Public methods
// Private methods

class Account {

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this._pin = _pin;
    this._movements = [];
    this.locate = navigator.language;

    console.log(`Thank for opening account, ${owner}`);
  }
  // Public Interface
  // Interface to the object aka API
  getMovements(){
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val){
    return true;
  }

  requestLoan(val){
    if(this._approveLoan(val)){
      this.deposit(val);
      console.log(`Load approved`)
    }
  }
}

const acc1 = new Account("A", "EUR", 1111);

// acc1.movements.push(250);
// acc1.movements.push(-150);
acc1.deposit(250);
acc1.withdraw(150);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1._pin)

// Encapsulation: private class fields and methods