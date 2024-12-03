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
				To become a leading force in technological innovation, making advanced solutions accessible 
				to businesses of all sizes while fostering sustainable growth and digital transformation.
			</p>
		</div>
	{:else}
		<div class="card bg-zinc-800/50 p-6 rounded-xl" in:fly={{ y: 20, duration: 300 }}>
			<div class="flex items-center space-x-3 mb-4">
				<span class="text-3xl">🚀</span>
				<h4 class="text-xl font-semibold text-green-500">Our Mission</h4>
			</div>
			<p class="text-zinc-400 leading-relaxed">
				To deliver innovative, sustainable, and cost-effective technology solutions that empower 
				businesses to thrive in the digital age through cutting-edge IoT, Robotics, and Automation solutions.
			</p>
		</div>
	{/if}
</div>