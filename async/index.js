// https://countries-api-836d.onrender.com/countries/

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
// CORS

// AJAX call
// Old way
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country___data">
//   <h3 class="country___name">${data.name.common}</h3>
//   <h4 class="country___region">${data.region}</h4>
//   <p class="country___row"><span>🤼</span>${(
//     +data.population / 1000000
//   ).toFixed(1)} people</p>
//   <p class="country___row"><span>🗣</span>${Object.keys(data.languages)[0]} </p>
//   <p class="country___row"><span>💰</span>${
//     Object.keys(data.currencies)[0]
//   } </p>
//   </div>
//   </article>

//   `;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country" ${className}>
  <img class="country__img" src="
  ${Object.values(data.flags)[1]}
  " />
  <div class="country___data">
  <h3 class="country___name">${data.name.common}</h3>
  <h4 class="country___region">${data.region}</h4>
  <p class="country___row"><span>🤼</span>${(
    +data.population / 1000000
  ).toFixed(1)} people</p>
  <p class="country___row"><span>🗣</span>${
    Object.values(data.languages)[0]
  } </p>
  <p class="country___row"><span>💰</span>${
    Object.keys(data.currencies)[0]
  } </p>
  </div>
  </article>

  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  // countriesContainer.style.opacity = 1;
};

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText("beforeend", msg);
//   // countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     const neighbour = data.borders?.[0];

//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour')
//     });
//   });
// };

// getCountryAndNeighbour("russia");
// getCountryData("vietnam");
// getCountryData("brazil");
// getCountryData("usa");
// getCountryData("sweden");

// const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

// const request = fetch("https://restcountries.com/v3.1/name/japan");
// console.log(request);

// Consuming Promise

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
const getJSON = function (url, errorMsg = "Some thing went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};
// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       console.log(response);
//       // if (!response.ok)
//       //   throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;
//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then((response) => {
//       response.json();
//     })
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
//     .then((data) => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders?.[0];
//       console.log(neighbour);

//       if (!neighbour) throw new Error("No neighbour found !");
//       // Country 2

//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         "Country not found"
//       );
//     })

//     .then((data) => {
//       // console.log(data)
//       renderCountry(data[0], "neighbour");
//       // console.log(renderCountry)
//     })
//     .catch((err) => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener("click", function () {
//   getCountryData("brazil");
// });

// Event loop

// console.log("Test start");
// setTimeout(() => console.log("0 sec timer"), 0);
// Promise.resolve("Resolve Promise 1").then((res) => console.log(res));

// Promise.resolve("Resolve Promise 2").then((res) => {
//   for (let i = 0; i < 10000; i++) {}
//   console.log(res);
// });
// console.log("test end");

// Simple Promise
const lotteryPromise = new Promise(
  // Executer function
  function (resolve, reject) {
    console.log("Lotter draw is happening");
    setTimeout(function () {
      if (Math.random() >= 0.5) resolve("You win 💰");
      else reject(new Error("You Lost your money 🤣"));
    }, 2000);
  }
);
lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log(" I waited for 2 seconds");
    return wait(1);
  })
  .then(() => console.log("I waited for 1 second"));

Promise.resolve("abc").then((x) => console.log(x));
Promise.reject(new Error("Problem")).catch((x) => console.error(x));

//Consuming promise with async/await
// const getPosition = function () {
//   // return new Promise(function (resolve, reject) {
//   //   navigator.geolocation.getCurrentPosition(resolve, reject);
//   // });
// };
// const whereAmI = async function (country) {
//   try {
//     // Geolocation
//     // const pos = await getPosition();
//     // const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     // const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     // if(!resGeo.ok) throw new Error('Problem getting location data');
//     // const dataGeo = await resGeo.json();
//     // console.log(dataGeo);
//     // Country data
//     // fetch(`https://restcountries.com/v3.1/name/${country}`).then((res) =>
//     //   console.log(res)
//     // );
//     const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);

//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.err(err);
//     renderError(`Some thing went wrong ${err.message}`);

//     // Reject promise returned from async function
//   }
// };
// // const city = whereAmI();
// // console.log(city);
// whereAmI()
//   .then((city) => console.log(`2: ${city}`))
//   .catch((err) => console.error(`2: ${err.message}`))
//   .finally(() => console.log(`3: Finished getting function`));

//   (async function(){
//     try{
//       const city= await whereAmI();
//       console.log(`2. ${city}`);
//     } catch (err){
//       console.log(`2. ${err.message}`);
//     }
//     console.log('3. Finished getting function');
//   })();

// Error handling with try...catch
// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err);
// }

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
// get3Countries("vietnam", "canada", "usa");
