import { json } from '@sveltejs/kit';
import { contactSchema } from '$lib/server/validation.js';
import { createContact } from '$lib/server/db.js';
import { sendContactNotification } from '$lib/server/email.js';

export async function POST({ request }) {
	try {
		const data = await request.json();
		const validatedData = contactSchema.parse(data);

		const contact = createContact(validatedData);
		await sendContactNotification(contact);

		return json({ success: true, message: 'Message sent successfully' });
	} catch (error) {
		console.error('Contact submission failed:', error);
		
		if (error.name === 'ZodError') {
			return json(
				{ success: false, message: 'Invalid form data', errors: error.errors },
				{ status: 400 }
			);
		}

		return json(
			{ success: false, message: 'Failed to send message' },
			{ status: 500 }
		);
	}
}