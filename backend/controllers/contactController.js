const Contact = require("../models/Contact");
const sendMail = require("../utils/mailSender");

exports.createContact = async (req, res) => {
    try {

        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Save to MongoDB
        const contact = await Contact.create({
            name,
            email,
            subject,
            message
        });

        // Try sending email (don't fail if SMTP fails)
        try {
            await sendMail(name, email, subject, message);
            console.log("✅ Email sent successfully");
        } catch (mailError) {
            console.error("❌ Email Error:", mailError.message);
            // Ignore email error so website still works
        }

        return res.status(201).json({
            success: true,
            message: "Message sent successfully",
            data: contact
        });

    } catch (error) {

        console.error("Contact Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};