const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendMail = async (name, email, subject, message) => {

    const mailOptions = {

        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,

        subject: `🚀 New Portfolio Contact - ${subject}`,

        html: `
        <div style="font-family:Arial,sans-serif;padding:20px;background:#f5f5f5">

            <h2 style="color:#2563eb;">New Contact Form Submission</h2>

            <table cellpadding="8">

                <tr>
                    <td><strong>Name:</strong></td>
                    <td>${name}</td>
                </tr>

                <tr>
                    <td><strong>Email:</strong></td>
                    <td>${email}</td>
                </tr>

                <tr>
                    <td><strong>Subject:</strong></td>
                    <td>${subject}</td>
                </tr>

            </table>

            <h3>Message</h3>

            <div style="background:#fff;padding:15px;border-radius:8px;border-left:4px solid #2563eb;">
                ${message}
            </div>

            <br>

            <small>This email was sent automatically from your Portfolio website.</small>

        </div>
        `
    };

    await transporter.sendMail(mailOptions);

};

module.exports = sendMail;


