const axios = require("axios");
const errorHandler = require("./errorHandler");

/**
 * Get rendom jokes from another server.
 */
const getRandomJoks = () => {
  try {
    return axios.get("http://api.icndb.com/jokes/random");
  } catch (error) {
    errorHandler(error);
  }
};

module.exports = { getRandomJoks };
