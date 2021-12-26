const axios = require("axios");
const API_BASE = "https://pokeapi.co/api/v2";

const App = {
  /**
   * Initialize the page and websocket connection
   */
  async init() {
    const allPokemon = [];

    axios
      .get(`${API_BASE}/pokemon`)
      .then((response) => {
        response.data.results.forEach((pokemon) => {
          allPokemon.push(pokemon);
        });
        console.log("Done!");
      })
      .catch((err) => {
        console.log("Unable to connect to the PokeAPI");
      });
  },
};

App.init();
