const axios = require("axios");

const getRandomJoks = () => {
  try {
    return axios.get("http://api.icndb.com/jokes/random");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getRandomJoks };
