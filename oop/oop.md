# OOP in general

OOP: is the a programming paradigm based on the concept of objects

- We use object to **model** (decribe) read world or abstract features
- Object may contain data (properties) and code (methods). By using object, we pack **data and the corresponding behavior** into one block
- In OOP, objects are **self-contained** pieces/blocks of code
- Object are **building block** of applications, and **interact** with one another
- Interactions happen through a **public interface** (API): methods that the code **outside** of the object can access and use to communicate with the object
- OOP was developed with the goal of **organizing** code, to make it **more flexible and easier to maintain** (avoid "spghetti code")

# Classes in general

Classed(BluePrint): blueprint from which we can create **new objects**
Instance: **New Object** created from the class. Like a real house created from an abstract blueprint
Object(instances) are **instantiated** from a class, which functions like a blueprint
Behavior(methods) is **copied** from class to all instances

4 fundamental principles of OOP:

- **Abstraction**

* Ignoring or hiding details that **don't matter**, allowing us to get an **overview** perspective of the thing we're implementing, instead of messing with details that don't really matter to out implementation

- **Encapsulation**

* Keeping properties and methods **private** inside the class, so they are **not accessible from outside the class**. Some methods can be **exposed** as a public interface (API)

- **Inheritance**

* Making all properties and methods of a certain classs **avaiable to a child class**, forming a hierachical relationshop between classes. This allows us to **reuse common logic** and to model real-world relationships

- **Polymorphism**(Greek: many shapes)

* A child class can **overwrite** a method it inherited from a parent class _[it't more complex than that, but enough for our purposes]_

---
# Note: before starting to use classes, must truly understand function constructors and the prototype, and the whole prototype chain logic
# OOP in JavaScript

#### Prototypes:

- Prototyal ineritance/ delegation

* Object are **linked** to a prototype object
* **Prototype inheritance**: The prototype contains methods (behavior) that are **accessible to all objects linked to that prototype**;
* Hehavior is **delegated** to the linked prototype object

_Array.prototype_ is the **prototype** of all array objects we create in JavaScript
Therefore, **all** arrays have access to the map method

---

### 3 ways of implementing prototypal inheritance in javascript

1. **Constructor functions**
   - Technique to create objects from a function
   - This is how built-in objects like Arrays, Maps or Sets are actually implemented
1. **ES6 Classes**
   - Modern alternative to constructor function syntax
   - "Syntactic sugar": behind the scenes, ES6 classes work **exactly** like constructor functions
   - ES6 classes do **NOT** behave like classes in "classical OOP"
1. **Object.create()**
   - The easiest and most straightfoward way of linking an object to a prototype object

---

### Prototype inheritance and the prototype chain

    `const Person = function(name, properties){
    this.name= name;
    this.properties= properties;
    }

    const object = new Object('name','properties')
    person.calcPro();`

- How Prototypal inheritance / delegation works

  - **_Constructor function [Person()]_** has a **_prototype property [(.prototype)]_** which is an object **_Prototype [Person.prototype]_**
  - And inside **_Prototype [Person.prototype]_** we defined **_calcAge: function_** method
  - And **_[Person.prototype]_** itself also has a reference back to **_[Person()]_** which is the **_constructor property [(.constructor)]_**
  - So **_[Person.prototype.constructor]_** is gonna back to **_[Person()]_** itself

  - **_[Person.prototype]_** is actually not the **prototype** of **_[Person()]_**
  - But all the objects are created throught the **person function**
  - And speaking of the created objects

#### How object is created using the **new** operator and the constructor function

When we call a function ,any function which the **new** operator the first thing that is gonna happen:

- The **new** operator

1.  An empty object is created **_Person[object]_**

        Example:

    **_Person[object]_**

1.  **this** keyword in constructor function call is set to the new object **_Person[object]_**

    - inside the function's execution context **[function(name,properties)]**, **this** is now the new empy object
    - set properties on the **this** keyword, it will automate set them on the new object **_[Person[object]]_**

      Example:
      **name: 'name'**
      **properties: 'properties'**

1.  The new object **_[Person[object]]_** is linked **_[(__proto__property)]_** to the constructor function's prototype property **_[Person.prototype]_**

    - This happend internally by adding **_[__proto__]_** property to the new object **_[Object[person]]_**
    - **_[Object.prototype]_** is the new objects prototype which denoted by **_[__proto__]_**

    Note: **_[__proto__]_** always point to an object prototype **_[Object.prototype]_**, that true for all objects in JavaScript

        Example:

    **proto**
    **Object.prototype**

1.  The result is the new object store in **object** variable

    #### ***And this happen automactic*** 
    Note: This is how it works with **function constructors** and **ES6 classes**

#### Why prototype work this way ?

**`object.calcPro()`**

- If a property of a method cannot be found in a certain object, JavaScript will look into its prototype **_[calcPro: function]_** in **_[Person.prototype]_**

#### => And this call **Prototypal Inheritance** or **Delegation**

**Prototype Chain**

- Is the ability of looking up methods and properties in a prototype
- Series of links between objects, linked through protypes
- When JavaScript can find a certain property or method in a certain object, it's gonna look up into the next prototype

#### Note: **[Person.prototype]** is an **Object** itself, every object in JavaScript has a prototype

- The prototype of **[Person.prototype]** is **[Object.prototype]**

- **[Object.prototype]** is just a simple object, it has been build by the built in **[Object()]** constructor function
- **[Object()]** constructor function is a built-in constructor function for object
- This is used when we write an object literal: `{...}, ===, new,  Object{...}`

- **[Object.prototype]** is usually the top of prototype chain => It's prototype is null ****proto**:null**

#### How Object.create works
- The same like constructor functions and classes
- instead of prototype was set automatic, we have to set prototype in **Object.create()** manually to any object that we want
-And we didn't need any constructor function and prototype property to achieve the exact same thing


#### Inheritance between "Classes" (Prototype Chain, Constructor chain)
- It's linking objects together, where some objects can serve as the prototype of other objects
- It's the child classes can share behavior from their parent classes
- And we have to create this connection manually
- To link two prototypes objects, use Object.create()
    `Student.prototype = Object.create(Person.prototype)`
    => This is a prototype chain

 `Student.prototype= Person.prototype`
=> This is wrong when **Student.prototype** and **Person.protype** linked to the same object instead of create a prototype chain between two prototypes

3 ways of using inherritance "Classes"
- Constructor functions
- Classes
- Object.create()