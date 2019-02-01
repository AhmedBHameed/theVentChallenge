const sanitizeHTML = require("../Services/sanitizeHTML");
const receiveJoksModule = require("../Models/MReceiveJoks");
const errorHandler = require("../Services/errorHandler");

global.FIFO_EMAILS = [];

/**
 * Recieve joke on POST method. It will clean any string passed on the object with the respect of model shape.
 * If the model shape not mathed an error of 422 [UNPROCESSABLE ENTITY] will passed to the client.
 * Otherwise it will schedule for sending the joke by email and send a result of success.
 * @param {Express Request} req
 * @param {Express Response} res
 */
const ReceiveJoks = (req, res) => {
  let data = req.body;
  res.setHeader("Content-Type", "application/json;charset=UTF-8");
  for (let item in receiveJoksModule) {
    if (data.hasOwnProperty(item)) {
      data[item] = sanitizeHTML(data[item]);
    } else {
      res
        .status(422)
        .send(errorHandler("Invalid request! Model properteis not matching!"));
      return;
    }
  }
  if (data.emails.split(", ")[0]) {
    FIFO_EMAILS.push(data);
    res.send({ success: "Email has been scheduled for sending." });
  } else {
    res.status(422).send(errorHandler("No emails provided!!"));
  }
};

module.exports = ReceiveJoks;
