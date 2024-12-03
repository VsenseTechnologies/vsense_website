<script>
	import { onMount } from 'svelte';
	
	const stats = [
		{ value: '10+', label: 'Projects Completed', icon: '📊' },
		{ value: '95%', label: 'Client Satisfaction', icon: '🎯' },
		{ value: '24/7', label: 'Support', icon: '🛟' },
		{ value: '5+', label: 'Industry Partners', icon: '🤝' }
	];

	let isVisible = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					isVisible = true;
				}
			},
			{ threshold: 0.1 }
		);

		const element = document.getElementById('stats-section');
		if (element) observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	});
</script>

<div id="stats-section" class="bg-gradient-to-r from-green-500/10 via-green-500/5 to-transparent rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
	<h4 class="text-xl font-semibold mb-6 text-center">Our Growth Journey</h4>
	<div class="grid grid-cols-2 gap-6">
		{#each stats as stat}
			<div class="text-center group cursor-pointer">
				<div class="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
					{stat.icon}
				</div>
				<div class="text-2xl font-bold text-green-500 mb-1 {isVisible ? 'animate-fadeIn' : 'opacity-0'}">
					{stat.value}
				</div>
				<div class="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
					{stat.label}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(20px); }
		to { opacity: 1; transform: translateY(0); }
	}

	.animate-fadeIn {
		animation: fadeIn 0.8s ease-out forwards;
	}
</style>