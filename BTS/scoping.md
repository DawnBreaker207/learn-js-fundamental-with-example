#### Scoping

- **Scoping**: How our program's variables are **organized** and **accessed**
- **Lexical scoping**: Scoping is controlled by **placement** of functions and blocks in the code
- **Scope**: Space or environment in which a certain variable is **declared**
  - There is **global** scope
  - **function** scope
  - **block** scope
- **Scope of a variable**: Region of our code where a certain variable can be **accessed**

- 3 type of scope
  - Global scope:
    - Outside of **any** function or block
    - Variable declared in global scope are accessible **everywhere**
  - Function scope:
    - Variables are accessible only **inside function, NOT** outside
    - Also called local scope
  - Block scope (ES6):
    - Variables are accessible only **inside block** (block scoped)
    - **HOWERVER**, this only applies to **let** and **const** variables
    - Functions are **also block scoped** (only in strict mode)


#### Scope chain

- Scope has access to variables from **all outer scope**
- This call variable lookup in scope chain


#### Execution contexts
##### Scope chain and callstack

- Scope chain order in which functions are **written in the code**
- Scope chain has **nothing** to do with order in which functions were **called**


##### This keyword
- **this keyword/variable**: 
    + Special variable that is created for every execution context(every function)
    + Takes the value of (points to ) the "owner" of the function in which the `this` key word is used
- `this` is **NOT** static. It depends on **how** then functiopn is called, and its value is only assigned when the function **is actually called**
    + **Method**: `this` =<Object that is calling the method>
    + **Simple function call**: `this` = `undefined` (In strict mode only ! Otherwise: `window`(browser))
    + **Arrow functions**: `this` = <`this` of surrouding function (lexical `this`)> (Arrow don't get own `this`)
    + **Event listener**: `this` = <DOM element that the handler is attached to>
    + **new, call, apply, bind**:
**=> `this` does **NOT** point to the function itself, and also **NOT** the is variable environment**
