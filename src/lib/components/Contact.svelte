<script>
	let formData = {
	  name: '',
	  email: '',
	  message: ''
	};
	let isSubmitting = false;
	let showSuccess = false;
	let errorMessage = '';
  
	async function handleSubmit() {
	  try {
		isSubmitting = true;
		errorMessage = '';
  
		// Validate form data before sending
		if (!formData.name || !formData.email || !formData.message) {
		  errorMessage = 'All fields are required.';
		  isSubmitting = false;
		  return;
		}
  
		const response = await fetch('/api/contact', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(formData)
		});
  
		// If response is not in JSON format, handle it
		let result;
		try {
		  result = await response.json();
		} catch (error) {
		  throw new Error('Failed to parse server response');
		}
  
		if (!response.ok) {
		  throw new Error(result.message || 'Failed to send message');
		}
  
		showSuccess = true;
		formData = { name: '', email: '', message: '' };
  
		// Hide success message after 3 seconds
		setTimeout(() => showSuccess = false, 3000);
	  } catch (error) {
		// @ts-ignore
		errorMessage = error.message;
	  } finally {
		isSubmitting = false;
	  }
	}
  </script>

<section id="contact" class="py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="section-title">Contact Us</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
			<div>
				<h3 class="text-2xl font-bold mb-4">Get in Touch</h3>
				<p class="text-zinc-400 mb-6">
					Ready to start your next project? Contact us for a free consultation and let's discuss how 
					we can help bring your ideas to life.
				</p>
				<div class="space-y-4">
					<div class="flex items-center">
						<span class="text-green-500 mr-4">📍</span>
						<span>Shobhavana campus, moodbidri, DK</span>
					</div>
					<div class="flex items-center">
						<span class="text-green-500 mr-4">📧</span>
						<span>vithsutra.tech@gmail.com</span>
					</div>
					<div class="flex items-center">
						<span class="text-green-500 mr-4">📱</span>
						<span>+91 9113068170</span>
					</div>
				</div>
			</div>
			<form on:submit|preventDefault={handleSubmit} class="space-y-6">
				{#if errorMessage}
					<div class="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-2 rounded-md">
						{errorMessage}
					</div>
				{/if}
				{#if showSuccess}
					<div class="bg-green-500/10 border border-green-500/20 text-green-500 px-4 py-2 rounded-md">
						Message sent successfully!
					</div>
				{/if}
				<div>
					<label for="name" class="block text-sm font-medium mb-2">Name</label>
					<input
						type="text"
						id="name"
						bind:value={formData.name}
						class="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:border-green-500"
						disabled={isSubmitting}
					/>
				</div>
				<div>
					<label for="email" class="block text-sm font-medium mb-2">Email</label>
					<input
						type="email"
						id="email"
						bind:value={formData.email}
						class="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:border-green-500"
						disabled={isSubmitting}
					/>
				</div>
				<div>
					<label for="message" class="block text-sm font-medium mb-2">Message</label>
					<textarea
						id="message"
						rows="4"
						bind:value={formData.message}
						class="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:border-green-500"
						disabled={isSubmitting}
					></textarea>
				</div>
				<button 
					type="submit" 
					class="btn-primary w-full relative overflow-hidden"
					disabled={isSubmitting}
				>
					{#if isSubmitting}
						<div class="absolute inset-0 flex items-center justify-center bg-green-500">
							<svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
								<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
						</div>
					{/if}
					<span class={isSubmitting ? 'opacity-0' : ''}>Send Message</span>
				</button>
			</form>
		</div>
	</div>
</section>