"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const pug = require("pug");
const cron = require("node-cron");
const dotenv = require("dotenv");
// Load environment variables from .env or .local.env file, where API keys and passwords are configured
dotenv.config({
  path: process.env.NODE_ENV === "production" ? "../.env" : "../.env" // We can select different file for development
});

// Services
const mailTrap = require("./Services/EmailSender");

// Controllers
const RandomJokes = require("./Controllers/RandomJoks");
const ReceiveJoks = require("./Controllers/ReceiveJoks");

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add headers config for each request and prevent other domains to access.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // I can put "*" but this may cause CORS issue
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Random joke come from node server.
app.get("/api/joks/random", RandomJokes);
app.post("/api/joks/send", ReceiveJoks);

// Job Cron to send email every 5 seconds and prevent blocking email port.
cron.schedule("0-59/5 * * * * *", async () => {
  let email = null;
  if (FIFO_EMAILS.length) {
    email = FIFO_EMAILS.shift();
    let template = pug.renderFile("./views/Emails/template.pug", {
      joke: email.joke
    });

    // setup email data
    let mailOptions = {
      from: '"Crazy bot 👻" <mailtrap@assignment.at>', // sender address
      to: email.emails, // list of receivers
      subject: "Fun Fun Jokes 👻", // Subject line
      text: "Some joks for fun.", // plain text body
      html: template // html body
    };
    let info = await mailTrap.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId); // Can be looged into a logger file or database
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
