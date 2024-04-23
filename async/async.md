#### Synchronos code

- Most code is **synchronous**
- Synchronous code is **executed line by line**
- Each line of code **waits** for previous line to finish
- Long-running operations **block** code execution

#### Asynchronous code

- Coordinating behavior of a program over a period of time
- Asynchronous code is executed **after a task that runs in the "background" finishes**
- Asynchronous code is **none-blocking**
- Execution doesn't wait for an asynchronous task to finish its work
- Callback does NOT automactically make code asynchronous
- addEventListener does NOT automatically make code asynchronous

#### AJAX Calls

- Allows us to commutnicate with remote web servers in a **asynchronous way**
- With AJAX calls , we can **request data** from web servers dynamically

#### API

- Piece of software that can be used by another piece of software, in order to allow **applications to talk to each other**
- There are many types of APIs in web development:

* DOM API

- Geolocation API
- Own Class API
- "Online" API
- **"Online" API**: Application running on a server, that receives requests for data, and sends data back as response
- We can build **our own** web APIs (requires back-end development, e-g with nodejs) or use **3rd-party** APIs

#### Promises

- An object that is used as a placeholder for the future result of an asynchronous operation
- **Promise**: A container for an asynchronous delivered value
- **Promise**: A container for a future value

**Advantages**

- We longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results
- Instead of nesting callbacks, we can **chain promises** for a sequence of asynchronous operations: **escaping callback hell**

##### The promise lifecycle

- Build Promise:

- Comsume Promise: When **already** have a promise

  - Pending: **Before** the future value is available
    **_=> With async task to setted =>_**
  - Setted: Asynchronous task **has finished**
    **_=>And Settled has two states=> _**
  - Fulfilled: Success! The value is now **availavle**
  - Rejected: An **error** happened

  **\*=> We are able **handle** these different state in our code\***

#### How asynchronous work: the event loop

##### JavaScript runtime in the browser

- **Concurrency model**: How JavaScript handles mutiple tasks happening at the same time

- "Container" which includes all the pieces necessary to execute JavaScript code

* Engine: "Heart" of the runtime
* Heap: Where objects are stored in memory
* Call stack: Where code is actually executed
  **=> Only ONE thread of execution. No multitasking**
* Web APIs:
  - APIs provided to the engine
  - Where asynchronous tasks run
  - Accessible on window **object**
* Callback queue: Ready-to-be-executed call functions(coming from events)
  - ex: Callback function from DOM event listener

- Microtasks queue: Like callback queue, but for callbacks related to **promise**. Has **priority** over callback queue

* Event Loop:
  - Send callbacks from queue to call stack
  - Decides **when** each callback is executed:**orchestration**
    **_=>Event loop is the essential piece, make JavaScript a non-blocking concurrency model_**

###### Runtime in Node.js
- Same to browser, instead of web APIs replace by C++ Bindings & Thread Pool

##### How they works behind the scenes
