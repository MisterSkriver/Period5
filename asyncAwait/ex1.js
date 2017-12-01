const fetch = require('node-fetch');
const URL = "https://swapi.co/api/people/";
const now = require("performance-now");

function fetchPerson(url) {
  return fetch(url)
    .then(res => res.json())
    .then((res) => res);
}

async function printNames() {
  const start = now();
  console.log("Before");

  const person1 = fetchPerson(URL.concat(1));
  const person2 = fetchPerson(URL.concat(2));
  const person11 = await person1;
  const person12 = await person2;
  console.log(person11.name);
  console.log(person12.name);
  console.log("After all: " + (now() - start));
}