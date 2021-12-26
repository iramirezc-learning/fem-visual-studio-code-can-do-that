import axios from "axios";
const API_BASE = process.env.API_BASE;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fetchPokemon(name) {
  axios
    .get(`${API_BASE}/pokemon/${name.toLowerCase()}`)
    .then((result) => result.data)
    .then(({ name, id }) => {
      console.log(`Pokemon ${name} has id ${id}`);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

readline.question("Enter a pokemon name: ", async (name) => {
  await fetchPokemon(name);
  readline.close();
});
