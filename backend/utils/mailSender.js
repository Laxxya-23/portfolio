const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendMail = async (name, email, subject, message) => {

    await transporter.sendMail({

        from: `"Portfolio Website" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,

        subject: `🚀 New Portfolio Contact - ${subject}`,

        html: `
        <h2>New Contact Form Submission</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>

        <hr>

        <p>${message}</p>
        `
    });

};

module.exports = sendMail;