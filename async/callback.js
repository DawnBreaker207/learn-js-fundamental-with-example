// FunctionOne
const time = () => {
  setTimeout(
    (functionOne = () => {
      console.log("This is 1");
      // FunctionTwo
      setTimeout(
        (functionTwo = () => {
          console.log("This is 2");
          // FunctionThree
          setTimeout(
            (functionThree = () => {
              console.log("This is 3");
            }),
            3000
          );
        }),
        2000
      );
    }),
    1000
  );
};
time()
