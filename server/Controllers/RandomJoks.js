const { getRandomJoks } = require("../Services/Fetch");

/**
 * Random jokes middleware for express. It fetches a new joke and send it to the client.
 * @param {Express Request} req
 * @param {Express Response} res
 */
const RandomJoks = (req, res) => {
  getRandomJoks()
    .then(dataFetched => dataFetched.data)
    .then(joke => {
      res.setHeader("Content-Type", "application/json;charset=UTF-8");
      res.send(joke);
    })
    .catch(error => {
      console.error(error);
    });
};

module.exports = RandomJoks;
