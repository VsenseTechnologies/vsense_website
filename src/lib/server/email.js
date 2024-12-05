import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Ensure this is called early in the file

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10), // Ensure this is an integer
    secure: false, // Use true for port 465
    auth: {
        user: process.env.SMTP_USER, // Gmail username or email
        pass: process.env.SMTP_PASS, // Gmail app password
    },
});

export default transporter;


export async function sendContactNotification(contact) {
	try {
		await transporter.sendMail({
			from: '"VSense Technologies" <vsense.tech@gmail.com>',
			to: 'sumithsbhatt@gmail.com', // Replace with admin email
			subject: 'New Contact Form Submission',
			html: `
				<h2>New Contact Form Submission</h2>
				<p><strong>Name:</strong> ${contact.name}</p>
				<p><strong>Email:</strong> ${contact.email}</p>
				<p><strong>Message:</strong></p>
				<p>${contact.message}</p>
			`
		});
	} catch (error) {
		console.error('Email sending failed:', error);
		throw new Error('Failed to send email notification');
	}
}

export async function sendWelcomeEmail(email) {
	try {
		await transporter.sendMail({
			from: '"VSense Technologies" <your-email@example.com>',
			to: email,
			subject: 'Welcome to VSense Technologies Newsletter',
			html: `
				<h2>Welcome to VSense Technologies!</h2>
				<p>Thank you for subscribing to our newsletter. You'll receive regular updates about:</p>
				<ul>
					<li>Latest IoT innovations</li>
					<li>Robotics developments</li>
					<li>Cloud solutions</li>
					<li>Industry insights</li>
				</ul>
				<p>Stay tuned for our next update!</p>
			`
		});
	} catch (error) {
		console.error('Welcome email sending failed:', error);
		throw new Error('Failed to send welcome email');
	}
}