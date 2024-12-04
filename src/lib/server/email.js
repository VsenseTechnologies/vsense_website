import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com', // Replace with your SMTP server
	port: 587,
	secure: false,
	auth: {
		user: 'sumithsbhatt@gmail.com', // Replace with your email
		pass: 'bwxhjqihixytxoqi' // Replace with your password
	}
});

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