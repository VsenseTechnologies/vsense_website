<script>
	import { fade, fly } from 'svelte/transition';
	// @ts-ignore
	import Stats from './About/Stats.svelte';
	// @ts-ignore
	import Features from './About/Features.svelte';
	// @ts-ignore
	import Vision from './About/Vision.svelte';
</script>

<section id="about" class="py-20 bg-zinc-900 relative overflow-hidden">
	<div class="absolute inset-0 bg-[url('/images/tech-pattern.png')] opacity-5"></div>
	<div class="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900"></div>
	
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
		<h2 class="section-title">About Us</h2>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
			<div in:fly={{ x: -50, duration: 500 }} class="space-y-8">
				<div>
					<h3 class="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
						Innovating Tomorrow's Solutions Today
					</h3>
					<p class="text-zinc-400 leading-relaxed">
						VSense Technologies bridges the gap between cutting-edge technology and practical business solutions. 
						We bring fresh perspectives and innovative approaches to the tech industry, focusing on IoT, Robotics, 
						and Industrial Automation.
					</p>
				</div>
				<Vision />
			</div>
			<div class="space-y-8" in:fly={{ x: 50, duration: 500 }}>
				<Features />
				<Stats />
			</div>
		</div>
	</div>
</section>