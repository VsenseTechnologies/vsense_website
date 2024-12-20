<script>
	import { fade, fly } from 'svelte/transition';
	
	let activeTab = 'vision';
</script>

<div class="space-y-6">
	<div class="flex space-x-4 mb-6">
		<button
			class="px-4 py-2 rounded-lg transition-all duration-300 {activeTab === 'vision' ? 'bg-green-500 text-white' : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50'}"
			on:click={() => activeTab = 'vision'}
		>
			Vision
		</button>
		<button
			class="px-4 py-2 rounded-lg transition-all duration-300 {activeTab === 'mission' ? 'bg-green-500 text-white' : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50'}"
			on:click={() => activeTab = 'mission'}
		>
			Mission
		</button>
	</div>

	{#if activeTab === 'vision'}
		<div class="card bg-zinc-800/50 p-6 rounded-xl" in:fly={{ y: 20, duration: 300 }}>
			<div class="flex items-center space-x-3 mb-4">
				<span class="text-3xl">🎯</span>
				<h4 class="text-xl font-semibold text-green-500">Our Vision</h4>
			</div>
			<p class="text-zinc-400 leading-relaxed">
				To drive innovation and create a meaningful difference in existing and future technologies by delivering high-quality
				 products and services with enhanced product life, ensuring customer satisfaction at every step.
			</p>
		</div>
	{:else}
		<div class="card bg-zinc-800/50 p-6 rounded-xl" in:fly={{ y: 20, duration: 300 }}>
			<div class="flex items-center space-x-3 mb-4">
				<span class="text-3xl">🚀</span>
				<h4 class="text-xl font-semibold text-green-500">Our Mission</h4>
			</div>
			<p class="text-zinc-400 leading-relaxed">
				To develop cutting-edge technological solutions that integrate seamlessly into institutional and industrial ecosystems.
				To prioritize quality and reliability in every product and service, ensuring exceptional customer experiences.
				To harness the power of IoT and cloud-based technologies for real-time, scalable, and efficient solutions.
				To foster innovation that addresses real-world challenges, creating value for businesses across all scales.
				To maintain a commitment to sustainability and adaptability in all technological advancements

			</p>
		</div>
	{/if}
</div>