function createPerson(name){
    const obj = {};
    obj.name= name;
    obj.introducSelf = function (){
        console.log(`Hi! I'm ${this.name}.`);
    }
}
const salva = createPerson("Salva");
salva.name;
salva.introducSelf();

const frankie= createPerson("Frankie");
frankie.name;
frankie.introducSelf();

function Person(name){
    this.name=name;
    this.introducSelf = function(){
        console.log(`Hi! I'm ${this.name}.`)
    };
}

const salva= new Person("Salva");
salva.name;
salva.introducSelf();

const frankie= new Person("Frankie");
frankie.name;
frankie.introducSelf();

myString.spilt(",");