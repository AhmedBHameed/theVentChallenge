const { getRandomJoks } = require("../Services/Fetch");

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
