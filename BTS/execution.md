#### What is an execution context
- Environment in which a piece of JavaScript is executed
- Stores all the necessary information for some code to be executed
- **Exacly ***one*** global execution context (EC)**:
    - Default context, created for code that is not inside any function (top-level)
- **One execution context ***per function*** **:
    - For each function call, a new execution context is created
=> All together make the call stack
- Execution 
    1. Creation of **global execution context** (for top-level code and **Not** inside a function)
    1. Execution of **top-level-code** (inside global EC)
    1. Execution of **functions** and waiting for **callbacks**

#### Execution context in details

- What's inside execution context ( Generated during "creation phase", right before execution)
    1. Variable Environment
    + `let, const` and `var` declarations
    + Functions
    + `arguments` object (1)
    1. Scope chain
    1. `this` keyword (1)

    (1): **NOT** in arrow functions

#### The call stack
- "Place" where execution contexts get stacked on top of each other
- To keep stack of where we are in the execution

- Compiled code starts execution