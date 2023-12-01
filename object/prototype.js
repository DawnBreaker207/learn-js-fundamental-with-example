const myObject = {
    city: "Marid",
    greet(){
        console.log(`Greetings from ${this.city}`);
    },
};

myObject.greet();

Object.getPrototypeOf(myObject);

const myDate = new Date();
let object = myDate;

do{
    object = Object.getPrototypeOf(object);
    console.log(object);
}while(object);


const personPrototype = {
    greet(){
        console.log("Hello");
    },
};

const carl = Object.create(personPrototype);
carl.greet();

const personPrototype = {
    greet(){
        console.log(`Hello, my name is ${this.name}!`);
    },
};

function Person(name){
    this.name= name;
}

Object.assign(Person.prototype, personPrototype);

