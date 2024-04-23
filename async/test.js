function AppendA() {
  console.log("Next");
  AppendC(AppendB());
}

function AppendB() {
  setTimeout(() => {
    console.log("Lmao");
  }, 2000);
}

function AppendC() {
  setTimeout(() => {
    console.log("Test");
  }, 1000);
}

function AppendD(){
  console.log("Hi there");
  AppendF()
}
function AppendF(){
  console.log("My name is");
}
console.log("Hello");
setTimeout(() => {
  AppendA();
}, 1000);

AppendD();