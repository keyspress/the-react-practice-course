const mailer = require('nodemailer');
require('dotenv').config();

const { welcome } = require('./welcome_template');
const { purchase } = require('./purchase_template');
const { resetPass } = require('./resetpass_template');

const getEmailData = (to, name, token, template, actionData) => {
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
    case 'purchase':
      data = {
        from: `Kyle <${process.env.EMAIL_USER}>`,
        to,
        subject: `Thanks for shopping with us ${name}!`,
        html: purchase(actionData)
      };
      break;
    case 'reset_password':
      data = {
        from: `Kyle <${process.env.EMAIL_USER}>`,
        to,
        subject: `Hey ${name} reset your password!`,
        html: resetPass(actionData)
      };
      break;
    default:
      data;
  }

  return data;
};

const sendEmail = (to, name, token, type, actionData = null) => {
  const smtpTransport = mailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mail = getEmailData(to, name, token, type, actionData);

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
