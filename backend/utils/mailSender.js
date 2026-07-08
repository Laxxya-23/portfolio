const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendMail = async (name, email, subject, message) => {

    await transporter.verify();

    const mailOptions = {
        from: `"Portfolio Website" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `🚀 New Portfolio Contact - ${subject}`,
        html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <hr>

        <p>${message}</p>
        `
    };

    return transporter.sendMail(mailOptions);
};

module.exports = sendMail;