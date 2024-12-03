import { json } from '@sveltejs/kit';
import { newsletterSchema } from '$lib/server/validation.js';
import { createNewsletterSubscriber, findNewsletterSubscriber } from '$lib/server/db.js';
import { sendWelcomeEmail } from '$lib/server/email.js';

export async function POST({ request }) {
	try {
		const data = await request.json();
		const validatedData = newsletterSchema.parse(data);

		const existingSubscriber = findNewsletterSubscriber(validatedData.email);
		if (existingSubscriber) {
			return json(
				{ success: false, message: 'Email already subscribed' },
				{ status: 400 }
			);
		}

		const subscriber = createNewsletterSubscriber(validatedData.email);
		await sendWelcomeEmail(subscriber.email);

		return json({ success: true, message: 'Successfully subscribed to newsletter' });
	} catch (error) {
		console.error('Newsletter subscription failed:', error);
		
		if (error.name === 'ZodError') {
			return json(
				{ success: false, message: 'Invalid email address', errors: error.errors },
				{ status: 400 }
			);
		}

		return json(
			{ success: false, message: 'Failed to subscribe' },
			{ status: 500 }
		);
	}
}