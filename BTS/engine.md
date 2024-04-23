#### JavaScript engine

- Program that **executes** JavaScript code
- They always contain:
  - Callstack:
    - Where our code is executed
    - Using execution contexts to executed code
  - Heap:
    - Is an unstructured memory pool
    - Where store all the object in memory
    - Where objects are stored

#### How code is executed to machine code

- There are two type of execution code:

  - **Complication**: Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer
    [Source code] ---Step 1: Compilation--->[Portable file: machine code] ---Step 2: Execution--->[Program running]
    
    + This executon can happen way after compilation

  - **Interpretation**: Interperter runs through the source code and executes it line by line
    [Source code] ---Step 1: Execution line by line--->[Program running]
    
    + In Exectution line by line, code still needs to be converted to machine code

- Modern JavaScript use:
  - **Just-in-time(JIT) complication\***: Entire code is converted into machine code at once, then executed immediately
    [Source code] ---Step 1: Compilation--->[Machine code] ---Step 2: Execution--->[Program running]

    + There no portable file to executed
    + Execution happens immediately after a compilation

#### How Just-in-time (JIT) compilation in modern JavaScript

- Step 1: Parsing
    + Read the code
    + During the parsing process, the code is parsed in a data structure called the abstract syntax tree (AST)
    + AST splitting up each line of code into pieces that are meaningful to the language
    + And save them into the tree in a structured way

- Step 2: Compilation (Use JIT)
    +   Generated AST and compiles it into machine code

- Step 3: Execution (Happens in Call Stack engines)
    + 

- Step 4: Optimization (During execution)
    + Compilation create a very unoptimized version of machine code in the beginning
    + Make code can start executing as fast as possible
    + In back ground, this code is being optimization and recompiled  

***=> All happens in special threads that we can't access from code***