const mailer = require('nodemailer');
require('dotenv').config();

const { welcome } = require('./welcome_template');

const getEmailData = (to, name, token, template) => {
  let data = null;

  switch (template) {
    case 'welcome':
      data = {
        from: `Kyle <${process.env.EMAIL_USER}>`,
        to,
        subject: `Hi ${name}! Welcome to Waves!`,
        html: welcome
      };
      break;
    default:
      data;
  }

  return data;
};

const sendEmail = (to, name, token, type) => {
  const smtpTransport = mailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mail = getEmailData(to, name, token, type);

  smtpTransport.sendMail(mail, function(err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('email sent');
    }
    smtpTransport.close();
  });
};

module.exports = { sendEmail };
