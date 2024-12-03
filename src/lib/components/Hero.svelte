<script>
	import { fade, fly } from 'svelte/transition';

	let images = [
		'/src/lib/images/banner6.jpg',
		'/src/lib/images/banner7.jpg',
		'/src/lib/images/banner3.jpg'
	];
	let currentImageIndex = 0;

	// Update the current image index every 5 seconds
	setInterval(() => {
		currentImageIndex = (currentImageIndex + 1) % images.length;
	}, 5000);
</script>

<section class="relative min-h-screen flex items-center py-20 md:py-0">
	<!-- Background Images -->
	<div class="absolute inset-0 z-0">
		{#each images as image, i}
			{#if i === currentImageIndex}
				<div
					class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
					in:fade
					style="background-image: url({image}); background-size: cover; background-position: center;"
				>
					<!-- Dark overlay -->
					<div class="absolute inset-0 bg-black/50"></div>
				</div>
			{/if}
		{/each}
	</div>

	<!-- Content Section -->
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="text-center">
			<h1
				class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
				in:fly={{ y: 50, duration: 500 }}
			>
				<span class="text-green-500">Innovation</span> Meets Excellence
			</h1>
			<p
				class="text-lg md:text-xl lg:text-2xl text-zinc-300 mb-8 max-w-3xl mx-auto"
				in:fly={{ y: 50, duration: 500, delay: 200 }}
			>
				From concept to creation, we transform ideas into cutting-edge solutions across IoT, Robotics,
				Software Development, and Industrial Automation.
			</p>
			<div
				class="flex flex-col sm:flex-row justify-center gap-4"
				in:fly={{ y: 50, duration: 500, delay: 400 }}
			>
				<a href="#contact" class="btn-primary text-center">Get Started</a>
				<a
					href="#services"
					class="px-6 py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition-all duration-300 text-center"
				>
					Learn More
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	/* Ensure the overlay is dark enough */
	.bg-black\/50 {
		background-color: rgba(0, 0, 0, 0.5); /* Adjust the transparency as needed */
	}
</style>
