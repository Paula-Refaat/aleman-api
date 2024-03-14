const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    sender: {
      name: process.env.EMAIL_FROM, // Custom sender name
    },
  });

  const mailOptions = {
    from: {
      name: process.env.EMAIL_FROM, // Custom sender name
      address: options.email, // Actual sender email address
    },
    to: process.env.EMAIL_USER,
    subject: options.subject,
    html: `
    <p><strong>Name:</strong> ${options.name}</p>
    <p><strong>Email:</strong> ${options.email}</p>
    <p><strong>Message:</strong> ${options.message}</p>
  `,
  };
  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
