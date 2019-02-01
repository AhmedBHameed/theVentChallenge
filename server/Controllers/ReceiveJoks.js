const sanitizeHTML = require("../Services/sanitizeHTML");
const receiveJoksModule = require("../Models/MReceiveJoks");
const errorHandler = require("../Services/errorHandler");

global.FIFO_EMAILS = [];

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
  FIFO_EMAILS.push(data);
  res.send({ success: "Email has been scheduled for sending." });
};

module.exports = ReceiveJoks;
