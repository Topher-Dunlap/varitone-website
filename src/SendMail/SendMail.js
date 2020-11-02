
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({ 
  service: 'gmail', 
  host: 'smtp.gmail.com', 
  auth: { user: 'okiesmusic@gmail.com', 
  pass: 'Ikeeikee1' } }));

  // verify connection configuration
transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var subject = req.body.subject
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `
    var mail = {
      from: name,
      to: "okiesmusic@gmail.com",
      subject: subject,
      text: content,
    }

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })