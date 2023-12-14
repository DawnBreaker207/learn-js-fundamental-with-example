class Person {
    name;
    constructor(name){
        this.name= name;
    }

    introduceSelf(){
        console.log(`Hi! I'm ${this.name}`);
    }
}
const giles = new Person("Giles");
giles.introducSelf();

// Omitting Constructors

class Animal {
    sleep(){
        console.log("zzzzzzz");
    
    }
}
spot.sleep();

// Inheritance

class Professor extends Person {
    teaches;

    constructor(name, teaches){
        super(name);
        this.teaches=teaches;
    }

    introducSelf(){
        console.log(
            `My name is ${this.name}, and I will be you ${this.teaches} professor.`
        );
    }
};

 grade(paper){
    const grade = Math.floor(Math.random() * (5-1) +1 );
    console.log(grade);
}

const walsh = new Professor("Walsh", "Psychology");
walsh.introducSelf();

walsh.grade("My paper");


// Encapsulation

// class Student extends Person {

//      Use # before to create private object and methods 
//     #year;

//     constructor(name, year){
//         super(name);
//         this.#year = year;
//     }

//     introducSelf(){
//         console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
//     }

//     canStudyArchery(){
//         return this.#year > 1;
//     }
// }

// const summers = new Student ("Summers", 2);
// summers.introducSelf();
// summers.introducSelf();

// summers.#year;


// Private methods
class Example {
    somePublicMethod(){
        this.#somePrivateMethod();
    }

    #somePrivateMethod(){
        console.log("You called me?");
    }
}

const myExample = new Example();

myExample.somePublicMethod();

myExample.#somePrivateMethod();