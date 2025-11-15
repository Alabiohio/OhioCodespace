const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// POST /send message
app.post("/send", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields required" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: "New Message From Ohio Codespace Website",
            html: `
  <div style="font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5;">
    <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
      
      <h2 style="color: #333; border-bottom: 2px solid #ff9900; padding-bottom: 10px;">
        New Message From Ohio Codespace
      </h2>

      <p style="font-size: 16px;">
        <strong style="color:#444;">Name:</strong> ${name}
      </p>

      <p style="font-size: 16px;">
        <strong style="color:#444;">Email:</strong> ${email}
      </p>

      <p style="font-size: 16px; margin-top: 20px;">
        <strong style="color:#444;">Message:</strong>
      </p>

      <div style="
        background: #fafafa;
        padding: 15px;
        border-radius: 8px;
        border: 1px solid #eee;
        font-size: 15px;
        line-height: 1.6;
      ">
        ${message}
      </div>

      <p style="margin-top: 30px; font-size: 14px; color: #888;">
        Sent automatically from the Ohio Codespace website.
      </p>
    </div>
  </div>
`,
        });

        return res.json({ success: true, message: "Email sent successfully" });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to send email" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
