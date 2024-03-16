const nodemailer = require("nodemailer");
const sendEmail = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      sender: {
        name: process.env.EMAIL_FROM,
      },
    });

    const mailOptions = {
      from: {
        name: options.name,
        address: `aleman@al-eman-herbs.com`,
      },
      to: `al-eman@al-eman-herbs.com`,
      subject: options.subject,
      html: `
        <p><strong>Name:</strong> ${options.name}</p>
        <p><strong>Email:</strong> ${options.email}</p>
        <p><strong>Message:</strong> ${options.message}</p>
      `,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

module.exports = sendEmail;
