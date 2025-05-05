const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// POST route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Setup transporter (use your real email and app password here)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'grovernitin0428@gmail.com',
      pass: 'vxrbnjcjmqlragyg', // Use App Password from Gmail
    },
  });

  const mailOptions = {
    from: email,
    to: 'grovernitin0428@gmail.com',
    subject: `New Contact from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
