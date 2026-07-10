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

        // Save data in MongoDB
        const contact = await Contact.create({
            name,
            email,
            subject,
            message
        });

        // Send response immediately
        res.status(201).json({
            success: true,
            message: "Message sent successfully",
            data: contact
        });

        // Send email in background
        sendMail(name, email, subject, message)
            .then(() => {
                console.log("✅ Email sent successfully");
            })
            .catch((err) => {
                console.error("❌ Email Error:", err.message);
            });

    } catch (error) {

        console.error("Contact Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
};