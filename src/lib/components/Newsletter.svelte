<!-- <script>
	import { fade, fly } from 'svelte/transition';
	let email = '';
	let isSubmitting = false;
	let showSuccess = false;
	let errorMessage = '';
	
	async function handleSubmit() {
		try {
			isSubmitting = true;
			errorMessage = '';

			const response = await fetch('/api/newsletter', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email })
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.message || 'Failed to subscribe');
			}

			showSuccess = true;
			email = '';
			setTimeout(() => showSuccess = false, 3000);
		} catch (error) {
			errorMessage = error.message;
		} finally {
			isSubmitting = false;
		}
	}
</script>

<div class="bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-800 rounded-xl p-8 relative overflow-hidden">
	<div class="absolute inset-0 bg-[url('/images/tech-pattern.png')] opacity-5"></div>
	<div class="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-transparent"></div>
	
	<div class="relative z-10 max-w-2xl">
		<h3 class="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
			Stay Ahead of Tech
		</h3>
		<p class="text-zinc-400 mb-6">
			Get exclusive insights on IoT, Robotics, and Cloud innovations. Join our community of tech enthusiasts.
		</p>
		
		{#if errorMessage}
			<div class="mb-4 bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-2 rounded-md">
				{errorMessage}
			</div>
		{/if}
		
		<form on:submit|preventDefault={handleSubmit} class="flex flex-col sm:flex-row gap-4">
			<div class="flex-grow relative">
				<input
					type="email"
					bind:value={email}
					placeholder="Enter your email"
					class="w-full px-4 py-3 bg-black/50 border border-zinc-800 rounded-md focus:outline-none focus:border-green-500 placeholder-zinc-600"
					disabled={isSubmitting}
				/>
				{#if showSuccess}
					<div 
						class="absolute right-3 top-1/2 -translate-y-1/2"
						in:fly={{ y: 20, duration: 300 }}
						out:fade
					>
						<svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
					</div>
				{/if}
			</div>
			<button 
				type="submit" 
				class="btn-primary relative overflow-hidden"
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
				<span class={isSubmitting ? 'opacity-0' : ''}>Subscribe Now</span>
			</button>
		</form>
	</div>
</div> -->