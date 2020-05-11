const nodemailer = require('nodemailer');
require('dotenv').config

const transporter = nodemailer.createTransport({
  host: 'wisesa.my.id',
  port: '25',
  auth: {
    user: 'service@wisesa.my.id',
    pass: 'admin'
  }
});


function sendMail() {
  let mailOptions = {
    from: 'service@wisesa.my.id',
    to: 'alifnaufalyasin@gmail.com',
    subject: 'Pasien Membutuhkan Anda',
    text: 'Ada pasien baru yang membutuhkan bantuan, mari kita bantu dia dengan sepenuh hati :)'
  }
 
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = {
  sendMail
}