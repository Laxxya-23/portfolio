const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,

    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },

    tls: {
        rejectUnauthorized: false
    }
});

const sendMail = async (name, email, subject, message) => {

    await transporter.sendMail({
        from: `"Portfolio Website" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,

        subject: `🚀 New Portfolio Contact - ${subject}`,

        html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <hr>

        <p>${message}</p>
        `
    });

};

module.exports = sendMail;