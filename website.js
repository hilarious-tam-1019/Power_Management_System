const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/web_routes');
const { render } = require('ejs');
const cors = require('cors');
const nodemailer = require('nodemailer');




//express app
const app = express();


//connect to mongodb
// const dbURI = 'mongodb+srv://tam:funnytam1999@nodetuts.xgpsw.mongodb.net/node-tuts?retryWrites=true&w=majority';
const dbURI1 = 'mongodb+srv://tam:funnytam1999@nodetuts.xgpsw.mongodb.net/user_info?retryWrites=true&w=majority'; // edit current_monitor


mongoose.connect(dbURI1, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then((result) => app.listen(3000))
.then((result)=> console.log('connected to website'))
.catch((err) => console.log(err));const

//register view engine
app.set('view engine','ejs');


//middleware & static files
app.use(express.json());
app.use(express.static('public'))
app.use(express.static('authentication'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());




//routes
app.use(routes);



// var transporter = nodemailer.createTransport(({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     auth: {
//       user: 'superman1011999@gmail.com',
//       pass: 'funnytam1999'
//     }
//   }));
  
//   var mailOptions = {
//     from: 'superman1011999@gmail.com',
//     to: 'tam.nguyen1011999@hcmut.edu.vn',
//     subject: 'Sending Email using Node.js[nodemailer]',
//     text: 'That was easy!'
//   };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });  



