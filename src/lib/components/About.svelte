<script>
	import { fade, fly } from 'svelte/transition';
	import Vision from './about/Vision.svelte';
	import Stats from './about/Stats.svelte';
	import Features from './about/Features.svelte';

	


</script>

<section id="about" class="py-20 bg-black-900 relative overflow-hidden">
	<div class="absolute inset-0 bg-black opacity-5"></div>
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
						Vithsutra Technologies bridges the gap between cutting-edge technology and practical business solutions. 
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