<script>
	import { fade, fly } from 'svelte/transition';
	export let images = [];
	export let title = '';

	let currentIndex = 0;

	function next() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function prev() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}

	function goToSlide(index) {
		currentIndex = index;
	}
</script>

<div class="relative group">
	<div class="relative h-[400px]  rounded-lg overflow-hidden">
		{#each images as image, i}
			{#if i === currentIndex}
				<div class="absolute inset-0">
					<img
						src={image}
						alt={`${title} - Image ${i + 1}`}
						class="w-full h-full object-contain "
						in:fade={{ duration: 300 }}
					/>
				</div>
			{/if}
		{/each}

		<!-- Navigation Arrows -->
		<button
			class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
			on:click={prev}
		>
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
		</button>

		<button
			class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
			on:click={next}
		>
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
			</svg>
		</button>

		<!-- Progress Bar -->
		<div class="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
			<div
				class="h-full bg-green-500 transition-all duration-300"
				style="width: {((currentIndex + 1) / images.length) * 100}%"
			/>
		</div>
	</div>


</div>