const nodemailer = require("nodemailer");

/**
 * Create reusable transporter object using the default SMTP transport
 */
let transporter = nodemailer.createTransport({
  host: process.env.MAIL_ADDRESS,
  port: process.env.MAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USERNAME, // generated ethereal user
    pass: process.env.MAIL_PASSWORD // generated ethereal password
  }
});

module.exports = transporter;
