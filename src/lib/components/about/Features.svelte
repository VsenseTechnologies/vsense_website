<script>
	const features = [
		{
			title: 'Innovation First',
			description: 'We leverage cutting-edge technologies to create forward-thinking solutions.',
			icon: '💡'
		},
		{
			title: 'Agile Approach',
			description: 'Rapid development and flexible solutions tailored to your needs.',
			icon: '🔄'
		},
		{
			title: 'Cost-Effective',
			description: 'Enterprise-level solutions at competitive prices.',
			icon: '💎'
		},
		{
			title: 'Quality Assured',
			description: 'Rigorous testing and quality control at every step.',
			icon: '✨'
		}
	];
</script>

<div class="bg-zinc-800/50 rounded-xl p-8 backdrop-blur-sm">
	<h4 class="text-xl font-semibold mb-6">Why Choose Us?</h4>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
		{#each features as feature}
			<div class="group hover:bg-zinc-700/30 p-4 rounded-lg transition-all duration-300 cursor-pointer">
				<div class="flex items-start space-x-4">
					<span class="text-3xl group-hover:scale-110 transition-transform duration-300">
						{feature.icon}
					</span>
					<div>
						<h5 class="font-medium text-green-500 group-hover:text-green-400 transition-colors">
							{feature.title}
						</h5>
						<p class="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors mt-1">
							{feature.description}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>